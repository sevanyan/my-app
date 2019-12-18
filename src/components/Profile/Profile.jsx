import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    // const posts =  props.store.getState().profilePage.posts;
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;

//
// posts = {props.profilePage.posts}
// newPostText = {props.profilePage.newPostText}
// dispatch = {props.dispatch}