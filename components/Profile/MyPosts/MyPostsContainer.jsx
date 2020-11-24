import React from 'react';
import {addProfilePostActionCreator, updateProfilePostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addProfilePostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateProfilePostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (<MyPosts addProfilePost={addPost}
                     updateProfilePostText={onPostChange}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;