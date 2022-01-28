import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";





export type MessagePropsType= {
    message: string
    id: number
}
export type DialogsArrayType ={
    name:string
    id:number
}
 export const DialogItem = (props:DialogsArrayType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>

    );
};



export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};
let dialogs = [
    {id: 1, name:"Pasha"},
    {id: 2, name:"Dasha"},
    {id: 3, name:"Ksusha"},
    {id: 4, name:"Sveta"},
    {id: 5, name:"Dima"}

]
let messages = [
    {id: 1,message:"Hi" },
    {id: 2,message:"Hello" },
    {id: 3,message:"Good" },
    {id: 4,message:"Hi Hi" },
    {id: 5,message:"Hi Hauhai" }

]

const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
const messagesElement = messages.map(m => <Message message={m.message } id={m.id}/>)
 export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;
