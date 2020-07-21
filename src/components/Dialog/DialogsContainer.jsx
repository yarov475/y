import React from "react";
import s from  './Dialog.module.css'
import Message from "./Messages/Message";
import Dialogitem from "./DialogsItem/Dialogitemtem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer=(props)=>{
    let state= props.store.getState().dialogPage;
    let onsendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    }
   let onNewMessageChange=(body)=>{
                props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return( <Dialogs updateNewMessageBody ={onNewMessageChange} sendMessage = {onsendMessageClick}
    dialogPage = {state}/>)

}
export default DialogsContainer;