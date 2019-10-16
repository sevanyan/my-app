import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={s.posts}>
                    <Post message = 'Hi, how are You?' count = '15' />
                    <Post message = 'It`s my first post' count = '20'/>
                    <Post/>
                    <Post/>
                    <Post/>


            </div>
          </div>
    );
}
export default MyPosts;