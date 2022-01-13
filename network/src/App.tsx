import React from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (

        <div className={s.app_wrapper}>
            <Header/>
            <Nav/>

                <div className={s.app_wrapper_content}>
                    <Routes>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/messages"} element={<Dialogs/>}/>
                        <Route path={"/news"} element={<News/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/seatings"} element={<Settings/>}/>
                    </Routes>
                </div>


        </div>


    );
}

export default App;
