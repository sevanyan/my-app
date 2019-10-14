import React from 'react';
import s from './Profile.module.css';
import MyPosts from "src/components/Profile/MyPosts/Posts/MyPosts";

const Profile = () => {
    return(
        <div className={s.content}>
            <div>

                <img src = 'https://www.rakacreative.com/wp-content/uploads/2017/01/Raka-Blog-social-media-sizes-1480x550.png' alt={'profileImage'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}
export default Profile;