import React from 'react';
import {addProfilePostActionCreator, updateProfilePostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addProfilePostActionCreator())
        },
        onPostChange: (text) => {
            let action = updateProfilePostTextActionCreator(text)
            dispatch(action)
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;