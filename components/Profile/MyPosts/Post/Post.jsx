import React from 'react';
import s from './Post.module.css';
import {safeMin} from "react-time-picker/dist/shared/utils";

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2018-06/1530090978_1.jpg' />
            {props.message}
        </div>
    )
}

export default Post;