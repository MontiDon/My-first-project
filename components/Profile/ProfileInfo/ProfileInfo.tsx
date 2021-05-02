import React, {ChangeEvent, useState} from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import style from './ProfileInfo.module.css'
import {ProfileDescriptionReduxForm} from "./ProfileDescriptionForm";
import {ContactsType, ProfileType} from "../../../types/Types";

type PropsType = {
    status: string
    profile: ProfileType | null
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const setAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {setEditMode(false)}
        )
    }

    return (
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div><img src={profile.photos.small || undefined} alt={' '}/></div>
            {isOwner && <input type="file" onChange={setAvatar}/>}
            <div>
                {editMode ? <ProfileDescriptionReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                : <ProfileDescription profile={profile} isOwner={isOwner} toEditMode={()=> {setEditMode(true)}}/>}
            </div>
        </div>
    )
}
type ProfileDescriptionPropsType = {
    profile: ProfileType
    isOwner: boolean
    toEditMode: () => void
}
const ProfileDescription: React.FC<ProfileDescriptionPropsType> = ({profile, isOwner, toEditMode}) => {
    return <>
        {isOwner && <div><button onClick={toEditMode}>editMode</button></div>}
        <div><b>FullName: </b>{profile.fullName}</div>
        <div><b>UserId: </b>{profile.userId}</div>
        <div><b>AboutMe: </b>{profile.aboutMe}</div>
        <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'Yes' : 'No'}</div>
        {profile.lookingForAJob &&
        <div><b>Looking for a job description: </b>{profile.lookingForAJobDescription}</div>}
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>})}</div>

    </>
}
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={style.contacts}><b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
}

export default ProfileInfo;
