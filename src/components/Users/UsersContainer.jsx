import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
} from "../../redux/users-reducer";
import Preloader from "../../Common/Preloader/preloader";
import {getUsers,pageChanger} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setUsers(response.data.items);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        pageChanger ( pageNumber, this.props.pageSize)
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
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}

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
        totalCount: state.usersPage.totalcount,
        followingInProgress: state.usersPage.followingInProgress,
        toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress

    }
}
export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, toggleIsFetching, setTotalUsersCount, toggleFollowingInProgress
    })(UsersContainer);

