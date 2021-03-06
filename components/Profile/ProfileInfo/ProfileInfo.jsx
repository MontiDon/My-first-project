import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <>
                <div><img src={props.profile.photos.small} alt={' '}/></div>
                <div>FullName: {props.profile.fullName}</div>
                <div>UserId: {props.profile.userId}</div>
                <div>AboutMe: {props.profile.aboutMe}</div>
                <div>Facebook: {props.profile.contacts.facebook}</div>
                <div>Website: {props.profile.contacts.website}</div>
                <div>vk: {props.profile.contacts.vk}</div>
                <div>Twitter: {props.profile.contacts.twitter}</div>
                <div>Instagram: {props.profile.contacts.instagram}</div>
                <div>Youtube: {props.profile.contacts.youtube}</div>
                <div>Github: {props.profile.contacts.github}</div>
                <div>MainLink: {props.profile.contacts.mainLink}</div>
                <div>LookingForAJob: {props.profile.LookingForAJob}</div>
                <div>LookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
            </>
        </div>
    )
}

export default ProfileInfo;