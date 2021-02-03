import {userAPI} from "../api/api";

const AddProfilePost = 'ADD-PROFILE-POST';
const UpdateProfilePostText = 'UPDATE-PROFILE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ],
    newPostText: '',
    profile: null,
    aboutMe: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case AddProfilePost:
            let body = state.newPostText;
            return {
                ...state,
                posts: [{id: 3, message: body}, ...state.posts],
                newPostText: ''
            }
            break;
        case UpdateProfilePostText:
            return {
                ...state,
                newPostText: action.newText
            }
            break;
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
    }

    return state;
}

export default profileReducer;

export const addProfilePostActionCreator = () => ({type: AddProfilePost}) // Если возвращаем простой тип, то можно использовать сокращенную запись.
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}
export const updateProfilePostTextActionCreator = (text) => {
    return {
        type: UpdateProfilePostText, newText: text
    }
}
