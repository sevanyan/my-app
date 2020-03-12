import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching
} from "../../redux/users-reducer";
import Preloader from "../../Common/Preloader/preloader";
import {usersAPI} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers().then(data => {
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setUsers(data.items);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${this.props.pageSize} `,
        //     {
        //         withcridentials: true
        //     })
        usersAPI.getUsers().then(data => {
                this.props.setUsers(data);
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
        totalCount: state.usersPage.totalCount


    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, toggleIsFetching, setTotalUsersCount
    })(UsersContainer);

