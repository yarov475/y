import React from "react";
import s from  './Dialog.module.css'
import Message from "./Messages/Message";
import Dialogitem from "./DialogsItem/Dialogitemtem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



const Dialogs =(props)=>{
    let state= props.store.getState().dialogPage;
    let DialogsElement=state.dialogs.map(d=><Dialogitem name ={d.name} id={d.id}/>);
    let MessagesElement=state.messages.map(m=> <Message message={m.message}/>);
    // let newPostElement=React.createRef();
    // // let addPost=()=>{
    // //     let text = newPostElement.current.value;
    // //     alert(text);
    // // }
    let newMessageBody = state.newMessageBody;
    let onsendMessageClick=()=>{
        // let text = newPostElement.current.value;
        // alert(text);
        props.store.dispatch(sendMessageCreator());
    }
   let onNewMessageChange=(e)=>{
         let body = e.target.value;
         props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return(


                   <div className={s.dialogs}>

                <div className={s.dialogITems}>
                    {DialogsElement}
                    <img src='https://cdn.cnn.com/cnnnext/dam/assets/200624161858-01-dolphin-tools-learning-medium-plus-169.jpg'></img>
                </div>
                    <div className={s.messages}>
                        <div>{MessagesElement}</div>
                       <div><textarea placeholder='Enter your message'   value={newMessageBody}
                       onChange={onNewMessageChange}></textarea> </div>
                      <div> <button onClick={onsendMessageClick}>ADD POST</button> </div>
                </div>
                </div>
    )

}
export default Dialogs;