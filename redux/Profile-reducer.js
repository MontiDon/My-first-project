const AddProfilePost = 'ADD-PROFILE-POST';
const updateProfilePostText = 'UPDATE-PROFILE-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ],
    newPostText: ''
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
        case updateProfilePostText:
            return {
                ...state,
                newPostText: action.newText
            }
            break;
    }

    return state;
}

export default profileReducer;

export const addProfilePostActionCreator = () => ({type: AddProfilePost}) // Если возвращаем простой тип, то можно использовать сокращенную запись.

export const updateProfilePostTextActionCreator = (text) => {
    return {
        type: updateProfilePostText, newText: text
    }
}
