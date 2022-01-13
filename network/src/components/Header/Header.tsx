import React from 'react';
import s from "./Header.module.css"

type HeaderProsType ={

}
const Header = () => {
    return (
            <header className={s.header}>
                <img src={"https://www.fao.org/fileadmin/user_upload/soils-2015/images/EN/logo_only.jpg"}/>
            </header>
    );
};

export default Header;