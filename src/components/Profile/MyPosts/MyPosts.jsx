import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
            <div>
                My Posts
                <div>
                    <textarea>Write some post here...</textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={s.posts}>
                    <Post message = 'Hi, how are You?' likescount = '15' />
                    <Post message = 'It`s my first post' likescount = '20'/>

            </div>
          </div>
    );
}
export default MyPosts;