import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostActionCreator,updateNewPostTextActionCreator} from"../../redux/profile-reducer";

const Profile = (props) => {
   const posts =  props.store.getState().profilePage.posts;
    return(
        <div>

            <ProfileInfo/>
            <MyPosts posts = {posts}
                     newPostText = {props.profilePage.newPostText}
                     dispatch = {props.dispatch} />
        </div>
    );
}
export default Profile;