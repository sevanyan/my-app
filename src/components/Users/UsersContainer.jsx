import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import  preloader from "../../assets/images/preloader.svg";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count = ${this.props.pageSize} `)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props. setUsersTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);

            })
    };

    render() {
        return <>
            {this.props.isFetching?
                <div>
                    <img src={preloader} style={{backroundColor: 'white'} }/> : null}
                </div>
            <Users
                pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
</div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        totalcount: state.usersPage.totalcount


    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);