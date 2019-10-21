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

    let dialogsData = [
        {id: 1, name: 'Artak'},
        {id: 2, name: 'Vazgen'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Vika'},
        {id: 5, name: 'Milena'},
        {id: 6, name: 'Seroj'}]


    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your Internship?'},
        {id: 3, message: 'I`m shure that everething is Ok!'},
        {id: 4, message: 'How are You?'},
        {id: 5, message: 'Call me please'},
        {id: 6, message: 'You are my best friend'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>
                <Message message={messagesData[5].message} id={messagesData[5].id}/>
        </div>

</div>

)
}

export default Dialogs;