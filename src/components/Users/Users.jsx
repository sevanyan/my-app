import React from "react";
import styles from "./users.module.css";
import userPhoto from '../../assets/images/download.png'
import {NavLink} from "react-router-dom";
import {unfollowUser, followUser} from "../../API/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div key={'users'}>
        <div key={'currentPage'}>
            {pages.map((p, index) => {
                return <span className={props.currentPage === p && styles.selectedPage} key={index}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}> {p}
                        </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.usersPhoto} alt={"A"}/>

                        </NavLink>
                    </div>
                        <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                unfollowUser(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                        }
                                        props.unfollow(u.id);
                                        props.toggleFollowingProgress(false, u.id)
                                    });

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                followUser(u.id, [], {})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            console.log('unfollow');
                                        }
                                        props.toggleFollowingProgress(false, u.id)

                                    });
                                props.follow(u.id)

                            }}>Follow</button>
                        }
                        </div>
                        </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                         <div>{u.userId}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;