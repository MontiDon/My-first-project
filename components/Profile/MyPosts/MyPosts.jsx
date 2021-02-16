import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostFormRedux} from "./AddPostsForm/AddPostsForm";



const MyPosts = (props) => {

    let postsElements = props.posts.map( p =>
        <Post message={p.message} key={p.id}/>);

    let addNewPost = (values) => {
        console.log(values)
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






export default MyPosts;