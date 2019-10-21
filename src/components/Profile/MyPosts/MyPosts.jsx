import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are You?'},
        {id: 2, message: 'It`s my first post'},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea>Write some post here...</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are You?' likescount='15'/>
                <Post message='It`s my first post' likescount='20'/>

            </div>
        </div>
    );
}
export default MyPosts;