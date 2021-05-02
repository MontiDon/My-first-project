import React from "react";
import s from './ProfileInfo.module.css'
import {createField, Input, Textarea} from "../../Common/FormsRedactor/FormsRedactor";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../Common/FormsRedactor/FormsRedactor.module.css";
import {ProfileType} from "../../../types/Types";

type PropsType = {
    profile: ProfileType
}
export const ProfileDescriptionForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div><b>FullName: </b>{createField('Full name', 'fullName', [], Input)}</div>
        <div><b>AboutMe: </b>{createField('About me', 'aboutMe', [], Textarea)}</div>
        <div><b>Looking for a job: </b>
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div><b>Looking for a job description: </b>
            {createField('', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contacts}><b>{key}: </b>{createField(key, 'contacts.' + key, [], Input)}</div>})}
        </div>
        <div><button>Save</button></div>
    </form>
}
export const ProfileDescriptionReduxForm = reduxForm<ProfileType, PropsType>({form: 'profile-editMode'})(ProfileDescriptionForm)


