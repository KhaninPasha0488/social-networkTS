import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.main}>
            <div>
                <img src={"https://image.freepik.com/free-vector/industrial-landscape-with-factories-and-manufacturing-plants-industry-illustration_88272-1405.jpg"}/>
            </div>
            <div>
                Ava + description
            </div>
           <MyPosts/>
        </main>
    );
};

export default Profile;