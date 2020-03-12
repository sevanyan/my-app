import React from "react";
import styles from "./users.module.css";
import userPhoto from '../../assets/images/download.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "2094cee2-a415-494f-a1bb-1f40e1be7cf3"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });


                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "2094cee2-a415-494f-a1bb-1f40e1be7cf3"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            console.log('unfollow');
                                        }
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

                        <span>



                        </span>
                        </span>
            </div>)

        }
    </div>
}

export default Users;