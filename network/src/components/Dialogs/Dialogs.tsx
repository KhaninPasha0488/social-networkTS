import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogItemPropsType ={
    name:string,
    id:number

}
 export const DialogItem = (props:DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>

    );
};
type MessagePropsType={
    message:string
}
export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={"Pasha"} id={1}/>
                <DialogItem name={"Dasha"} id={2}/>
                <DialogItem name={"Ksusha"} id={3}/>
                <DialogItem name={"Sveta"} id={4}/>
                <DialogItem name={"Dima"} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"Hello"}/>
                <Message message={"Good!"}/>

            </div>
        </div>
    );
};

export default Dialogs;
