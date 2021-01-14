import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://strana.ua/img/article/2625/70_main.jpeg' />
            <div>NotMyAvatar<div><img src={props.profile.photos.small}/></div></div>
            <div>AboutMe: {props.profile.aboutMe}</div>
            <div>Facebook: {props.profile.contacts.facebook}</div>
            <div>Website: {props.profile.contacts.website}</div>
            <div>vk: {props.profile.contacts.vk}</div>
            <div>Twitter: {props.profile.contacts.twitter}</div>
            <div>Instagram: {props.profile.contacts.instagram}</div>
            <div>Youtube: {props.profile.contacts.youtube}</div>
            <div>Github: {props.profile.contacts.github}</div>
            <div>MainLink: {props.profile.contacts.mainLink}</div>
            <div>LookingForAJob: {props.profile.contacts.LookingForAJob}</div>
            <div>LookingForAJobDescription: {props.profile.contacts.lookingForAJobDescription}</div>
            <div>FullName: {props.profile.contacts.fullName}</div>
            <div>UserId: {props.profile.contacts.userId}</div>
        </div>
    )
}

export default ProfileInfo;