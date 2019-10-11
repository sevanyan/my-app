import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>

                <img src = 'https://i0.wp.com/www.peopleofar.com/wp-content/uploads/tatev-monastery-armenia.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
          </div>
        </div>
    );
}
export default Profile;