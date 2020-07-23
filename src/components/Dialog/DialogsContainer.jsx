import React from "react";
import s from './Dialog.module.css'
import Message from "./Messages/Message";
import Dialogitem from "./DialogsItem/Dialogitemtem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStatetoProps =(state)=>{
    return{
        dialogPage: state.dialogPage

    }
}
let mapDispatchtoProps =(dispatch)=>{
    return{
        updateNewMessageBody: ()=>{
            dispatch(sendMessageCreator());
        },
        sendMessage: (body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        }

    }
}

const DialogsContainer = connect(mapStatetoProps,mapDispatchtoProps)(Dialogs);
export default DialogsContainer;