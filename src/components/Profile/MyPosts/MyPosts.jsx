import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const Myposts = (props) => {

    let postsElements = props.posts

        .map(p => <Post message={p.message} likescount ={p.likesCount}/>);

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

                {postsElements}
            </div>
        </div>
    );
}
export default Myposts;