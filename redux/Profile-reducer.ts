import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, ProfileType} from "../types/Types";

const AddProfilePost = 'ADD-PROFILE-POST';
const DELETE_POST = 'DELETE-PROFILE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

export type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ] as Array<{id: number, message: string}>,
    profile: null as ProfileType | null,
    aboutMe: '',
    status: '',
    photo: '',
    newPostText: ''
}

const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case AddProfilePost:
            let body = action.newPostText;
            return {
                ...state,
                posts: [{id: 3, message: body}, ...state.posts],
                newPostText: ''
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.file} as ProfileType
            }
        }
    }
    return state;
}

export default profileReducer;

type AddProfilePostActionCreatorType = {
    type: typeof AddProfilePost,
    newPostText: string
}
export const addProfilePostActionCreator = (newPostText: string): AddProfilePostActionCreatorType => ({type: AddProfilePost, newPostText}) // Если возвращаем простой тип, то можно использовать сокращенную запись.
type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})
type SetPhotoType = {
    type: typeof SET_PHOTO
    file: PhotosType
}
export const setPhoto = (file: PhotosType): SetPhotoType => ({type: SET_PHOTO, file})


export const getUserProfile = (userId: number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatus(status))
    } catch (error) {
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0 || alert('profileAPI.savePhoto response is wrong'))
        dispatch(setPhoto(response.data.data.photos))
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else {
            dispatch(stopSubmit("profile-editMode", {_error: response.data.messages[0]}))
            return Promise.reject() //операция завершена с ошибкой
        }

}





/*export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setStatus(status))
    });
}*/
