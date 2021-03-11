import {profileAPI} from "../api/api";

const AddProfilePost = 'ADD-PROFILE-POST';
const DELETE_POST = 'DELETE-PROFILE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';


let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ],
    profile: null,
    aboutMe: '',
    status: '',
    photo: ''
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
                ...state, profile: {...state.profile, photos: action.file}
            }
        }
    }
    return state;
}

export default profileReducer;

export const addProfilePostActionCreator = (newPostText) => ({type: AddProfilePost, newPostText}) // Если возвращаем простой тип, то можно использовать сокращенную запись.
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhoto = (file) => ({type: SET_PHOTO, file})


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0 || alert('profileAPI.savePhoto response is wrong'))
        dispatch(setPhoto(response.data.data.photos))
}





/*export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setStatus(status))
    });
}*/
