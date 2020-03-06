import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, toggleIsFetching
} from "../../redux/users-reducer";
import Preloader from "../../Common/Preloader/preloader";
import {getUsers} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);


       getUsers().then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsersTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${this.props.pageSize} `,
        {
            withcridentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);

            })
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}

            />
        </>
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
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, toggleIsFetching, setUsersTotalCount
    })(UsersContainer);

