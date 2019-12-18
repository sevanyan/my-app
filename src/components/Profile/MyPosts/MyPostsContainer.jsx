import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer> {
            (store) => {
                let state = props.store.getState();
                let addPost = () => {
                    props.store.dispatch(addPostActionCreator());
                }


                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    props.store.dispatch(action);

                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }

        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;