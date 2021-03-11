import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const setAvatar = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <>
                <div><img src={profile.photos.large} alt={' '}/></div>
                {isOwner && <input type="file" onChange={setAvatar}/>}
                <div>FullName: {profile.fullName}</div>
                <div>UserId: {profile.userId}</div>
                <div>AboutMe: {profile.aboutMe}</div>
                <div>Facebook: {profile.contacts.facebook}</div>
                <div>Website: {profile.contacts.website}</div>
                <div>Vk: {profile.contacts.vk}</div>
                <div>Twitter: {profile.contacts.twitter}</div>
                <div>Instagram: {profile.contacts.instagram}</div>
                <div>Youtube: {profile.contacts.youtube}</div>
                <div>Github: {profile.contacts.github}</div>
                <div>MainLink: {profile.contacts.mainLink}</div>
                <div>LookingForAJob: {profile.LookingForAJob}</div>
                <div>LookingForAJobDescription: {profile.lookingForAJobDescription}</div>
            </>
        </div>
    )
}

export default ProfileInfo;
//<div><img src={profile.photos.large} alt={' '}/></div>
//{isOwner && <input type="file" onChange={setAvatar}/>}