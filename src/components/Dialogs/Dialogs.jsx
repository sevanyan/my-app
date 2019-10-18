import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

}
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Artak' id='1'/>
                <DialogItem name='Vazgen' id='2'/>
                <DialogItem name='Anna' id='3'/>
                <DialogItem name='Vika' id='4'/>
                <DialogItem name='Milena' id='5'/>
                <DialogItem name='Seroj' id='6'/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your Internship?"/>
                <Message message="I`m shure that everething is Ok!"/>
            </div>
        </div>
    )
}
export default Dialogs;