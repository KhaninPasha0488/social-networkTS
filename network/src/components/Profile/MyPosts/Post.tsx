import React from 'react';
import s from "./Post.module.css"

type PostType = {
    id:number
    message:string
    likeCount:number

}

const Post = (props:PostType) => {
    return (
        <div className={s.item}>
        <img src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}/>
            {props.message}
            <span>Like</span>{props.likeCount}
    </div>
    );
};

export default Post;