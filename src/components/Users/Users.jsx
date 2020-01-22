import React from 'react';
import styles from "./users.module.css"
import * as axios from "axios";
import userPhoto from '../../assets/images/download.png'


const Users = (props) => {

    let getUsers = () =>
    {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);

                });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button>
                            : <button onClick={() => (props.follow(u.id))}>Follow</button>
                        }

                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>   
                    
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)

        }
    </div>

}
export default Users;


// ([
//
//     {
//         id: 1,
//         photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/41w8VIz03%2BL._SX260_.jpg',
//         followed: true,
//         fullName: 'Denzel Washington',
//         status: "I am a the King",
//         location: {city: "Nebraska", country: "USA"}
//     },
//     {
//         id: 2,
//         photoUrl: 'data:image/jpeg;base64,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',
//         followed: true,
//         fullName: 'Puff Daddy',
//         status: "Dirty  Money",
//         location: {city: "New York ", country: "USA"}
//     },
//     {
//         id: 3,
//         photoUrl: 'https://s.yimg.com/ny/api/res/1.2/1twaSc1zkqjb_c.xnbW5ng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNi42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/nAOYfkYQgPPj4Mm8vubmcA--~B/aD01NjA7dz04NDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_week_574/b02cfc4cd3cca1e09393ca5b09a6a330',
//         followed: true,
//         fullName: 'Justin Trudeau',
//         status: "I like creative things",
//         location: {city: "Ontario", country: "Canada"}
//     },
//     {
//         id: 4,
//         photoUrl: 'https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg',
//         followed: false,
//         fullName: 'Tonald Trumb',
//         status: "America will destroy all Iranian terorists ",
//         location: {city: "Washington White House", country: "USA"}
//     },
//     {
//         id: 5,
//         photoUrl: 'https://gdb.rferl.org/28C51205-CC64-41D4-8F96-D5BE12A067A0_cx0_cy1_cw0_w408_r1_s.jpg',
//         followed: false,
//         fullName: 'Рамзан Кадыров',
//         status: "А салаламалейком Трампу",
//         location: {city: "Грозный", country: "Россия"}
//     },
//     {
//         id: 6,
//         photoUrl: 'https://static.timesofisrael.com/www/uploads/2019/09/AP19246243341365-e1569235598170.jpg',
//         followed: false,
//         fullName: 'Hassan Rouhani',
//         status: "Allahu Akbar",
//         location: {city: "Tehran", country: "Iran"}
//     },
// ])