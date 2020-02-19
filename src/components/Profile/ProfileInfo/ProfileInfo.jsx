import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <img
                src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bc00b5b-6315-46be-b929-605739cf0a30/d4qb62b-a8131be1-05e0-4dd4-9b64-f33c3fab31c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiYzAwYjViLTYzMTUtNDZiZS1iOTI5LTYwNTczOWNmMGEzMFwvZDRxYjYyYi1hODEzMWJlMS0wNWUwLTRkZDQtOWI2NC1mMzNjM2ZhYjMxYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LPzfpeqQzturkSJTfQQRsChfweTaH1QOxae5D3Ppjy4'
                alt='profileImage'/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={"ProfileImage"}/>
                <dev><br/> {props.profile.fullName}
                </dev>
                <dev><br/> {}
                </dev>

                <ul>
                    <li>github:</li>
                    <li>vk:</li>
                    <li>facebook:</li>
                    <li>instagram:</li>
                    <li>twitter:</li>
                    <li>website:</li>
                    <li>youtube:</li>
                </ul>

                <br/> Avatar and Description

            </div>
        </div>
    );
}
export default ProfileInfo;