import React from "react";
import s from  './Dialog.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Messages/Message";
import Dialogitem from "./DialogsItem/Dialogitemtem";



const Dialogs =(props)=>{
    let DialogsElement=props.dialogs.map(d=><Dialogitem name ={d.name} id={d.id}/>);

    let MessagesElement=props.messages.map(m=> <Message message={m.message}/>);
    return(

                   <div className={s.dialogs}>
                <div className={s.dialogITems}>
                    {DialogsElement}
                </div>
                    <div className={s.messages}>
                        {MessagesElement}
                </div>
                </div>
    )

}
export default Dialogs;