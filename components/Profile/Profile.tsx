import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from '../../types/Types';

type MapStateToProps = {
    status: string
    profile: ProfileType | null
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<MapStateToProps> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}
                         savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;