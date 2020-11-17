import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({addPost, newPostText, posts, updateNewPostText}) => {

    let postsElements = posts.map(p =>
        <Post message={p.message}/>);

    let onPostChange = (e) => {
        updateNewPostText(e.target.value);
    }

    return (
        <div className={s.MyPostsArea}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} value={newPostText}></textarea>
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