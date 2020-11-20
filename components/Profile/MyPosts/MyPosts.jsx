import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p =>
        <Post message={p.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-PROFILE-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-PROFILE-POST-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.MyPostsArea}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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