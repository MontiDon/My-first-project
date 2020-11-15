import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Post message={p.message}/>);


    let onPostChange = (e) => {
        props.updateNewPostText(e.target.value);
        console.log(e.target.value)

    }

    return (
        <div className={s.MyPostsArea}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={props.addPost} >Add post</button>
            </div>
            <div className={s.Posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;