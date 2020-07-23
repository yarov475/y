import React from "react";
import s from './Dialog.module.css'
import Message from "./Messages/Message";
import Dialogitem from "./DialogsItem/Dialogitemtem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let onsendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onsendMessageClick}
                             dialogPage={store.getState().dialogPage}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer;