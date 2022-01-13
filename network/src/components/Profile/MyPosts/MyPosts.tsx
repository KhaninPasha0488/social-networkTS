import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post";
const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div>
                <div>
                New post
                </div>
                <div className={s.posts}>
                    <Post/>
                    <Post/>

                </div>
            </div>
        </div>
    )
        ;
};

export default MyPosts;