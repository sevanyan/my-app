import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
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
            </div>
        </div>
    );
}
export default ProfileInfo;