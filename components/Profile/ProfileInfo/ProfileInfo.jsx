import React, {useState} from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from './ProfileInfo.module.css'
import {ProfileDescriptionReduxForm} from "./ProfileDescriptionForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const setAvatar = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {setEditMode(false)}
        )
    }

    return (
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div><img src={profile.photos.small} alt={' '}/></div>
            {isOwner && <input type="file" onChange={setAvatar}/>}
            <div>
                {editMode ? <ProfileDescriptionReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                : <ProfileDescription profile={profile} isOwner={{isOwner}} toEditMode={()=> {setEditMode(true)}}/>}
            </div>
        </div>
    )
}

const ProfileDescription = ({profile, isOwner, toEditMode}) => {
    return <>
        {isOwner && <div><button onClick={toEditMode}>editMode</button></div>}
        <div><b>FullName: </b>{profile.fullName}</div>
        <div><b>UserId: </b>{profile.userId}</div>
        <div><b>AboutMe: </b>{profile.aboutMe}</div>
        <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'Yes' : 'No'}</div>
        {profile.lookingForAJob &&
        <div><b>Looking for a job description: </b>{profile.lookingForAJobDescription}</div>}
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>})}</div>

    </>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
