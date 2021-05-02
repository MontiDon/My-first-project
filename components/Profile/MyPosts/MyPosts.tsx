import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostFormRedux} from "./AddPostsForm/AddPostsForm";
import {PostType} from "../../../types/Types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (text: string) => void
}
export type AddPostFormValuesType = {
    newPostText: string
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsElements = props.posts.map(p =>
        <Post key={p.id} message={p.message}/>);

    let addNewPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.MyPostsArea}>
            <h3>My posts</h3>
            <PostFormRedux onSubmit={addNewPost}/>
            <div className={s.Posts}>
                {postsElements}
            </div>
        </div>
    )
}
const MyPostsMemo = React.memo(MyPosts)


export default MyPostsMemo;