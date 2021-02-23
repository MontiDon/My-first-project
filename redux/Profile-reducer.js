import {profileAPI} from "../api/api";

const AddProfilePost = 'ADD-PROFILE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ],
    profile: null,
    aboutMe: '',
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case AddProfilePost:
            let body = action.newPostText;
            return {
                ...state,
                posts: [{id: 3, message: body}, ...state.posts],
                newPostText: ''
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
    }

    return state;
}

export default profileReducer;

export const addProfilePostActionCreator = (newPostText) => ({type: AddProfilePost, newPostText}) // Если возвращаем простой тип, то можно использовать сокращенную запись.
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
        dispatch(setStatus(status))
    });
}
