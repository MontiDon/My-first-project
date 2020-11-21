import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addProfilePostActionCreator, updateProfilePostTextActionCreator} from "../../../redux/Profile-reducer";


const MyPosts = (props) => {


    let postsElements = props.posts.map( p =>
        <Post message={p.message}/>);

    let addPost = () => {
        props.dispatch(addProfilePostActionCreator())
    }

    let onPostChange = (e) => {
        props.dispatch(updateProfilePostTextActionCreator(e.target.value));
    }

    return (
        <div className={s.MyPostsArea}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} placeholder='Enter your message' ></textarea>
            </div>
            <div>
                <button onClick={addPost} >Add post</button>
            </div>
            <div className={s.Posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;