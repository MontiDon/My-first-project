import React from 'react';
import s from './Post.module.css';

type MapStateToPropsType = {
    message: string
}

const Post: React.FC<MapStateToPropsType> = (props) => {

    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2018-06/1530090978_1.jpg' />
            {props.message}
        </div>
    )
}

export default Post;