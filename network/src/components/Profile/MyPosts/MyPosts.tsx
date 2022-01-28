import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post";


const MyPosts = () => {
    let posts =[
        {id:1, message:"Hi, how are you", likeCount:4},
        {id:2, message:"Hi, hi", likeCount:34},
        {id:3, message:"Hi, hi yo", likeCount:45},
        {id:4, message:"Hi,hauhi", likeCount:23},
        {id:5, message:"Hi, you hi", likeCount:5}

    ]
    const postsElement = posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>

            <button>Add post</button>
            <button>Remove</button>
            <div>
                <div>
                New post
                </div>
                <div className={s.posts}>
                    {postsElement}

                </div>
            </div>
        </div>
    )
        ;
};

export default MyPosts;