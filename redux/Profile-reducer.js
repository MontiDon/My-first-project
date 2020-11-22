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
            let newPost = {
                id: 3,
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case updateProfilePostText:
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export default profileReducer;

export const addProfilePostActionCreator = () => ({type: AddProfilePost}) // Если мы просто возвращаем константу(что то простое), то можно использовать сокращенную запись.

export const updateProfilePostTextActionCreator = (text) => {
    return {
        type: updateProfilePostText, newText: text
    }
}
