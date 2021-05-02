import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, ProfileType} from "../types/Types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./Redux-store";

let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ] as Array<{id: number, message: string}>,
    profile: null as ProfileType | null,
    aboutMe: '',
    status: '',
    photo: '',
}

const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {
        case 'ADD-PROFILE-POST':
            let body = action.newPostText;
            return {
                ...state,
                posts: [{id: 3, message: body}, ...state.posts],
            }
        case 'DELETE-PROFILE-POST':
            return {...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'SET_PHOTO': {
            return {
                ...state, profile: {...state.profile, photos: action.file} as ProfileType
            }
        }
    }
    return state;
}

export const actions = {
    addProfilePostActionCreator: (newPostText: string) => ({type: 'ADD-PROFILE-POST', newPostText} as const), // Если возвращаем простой тип, то можно использовать сокращенную запись.
    deletePost: (postId: number)  => ({type: 'DELETE-PROFILE-POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    setPhoto: (file: PhotosType) => ({type: 'SET_PHOTO', file} as const),
}
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0)
            dispatch(actions.setStatus(status))
    } catch (error) {
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0 || alert('profileAPI.savePhoto response is wrong'))
        dispatch(actions.setPhoto(data.data.photos))
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.saveProfile(profile)
        if (data.resultCode === 0) {
            if (userId != null) {
            dispatch(getUserProfile(userId))
            } else {
                throw new Error('userId can`t be null')
            }
        } else {
            dispatch(stopSubmit("profile-editMode", {_error: data.messages[0]}))
            return Promise.reject() //операция завершена с ошибкой
        }

}

export default profileReducer;

type ThunkType = BaseThunkType<ActionTypes | FormAction>
type ActionTypes = InferActionsTypes<typeof actions>
export type initialStateType = typeof initialState

/*export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setStatus(status))
    });
}*/
