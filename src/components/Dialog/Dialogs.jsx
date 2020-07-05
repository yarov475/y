import React from "react";
import s from  './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialogitem = (props)=> {
    let path = "/dialogs/"+props.id;

    return <div className={s.dialog + ' ' + s.active} >
        <NavLink to={path} >  {props.name} </NavLink>
    </div>
}
const Message = (props)=>{
    return<div className={s.dialog}>{props.message}</div>

}

const Dialog =(props)=>{
    return(

                   <div className={s.dialogs}>
                <div className={s.dialogITems}>
                    <Dialogitem name ="Dmitry" id={"1"}></Dialogitem>
                    <Dialogitem name ="Vova" id={"2"}></Dialogitem>
                    <Dialogitem name ="Leha" id={"3"}></Dialogitem>
                    <Dialogitem name ="Jon" id={"4"}></Dialogitem>


                </div>

                    <div className={s.messages}>
                        <Message message={"love yoy"}
                        ></Message> <Message message={"very "}
                        ></Message> <Message message={"much yoy"}
                        ></Message>
                </div>
                </div>
    )

}
export default Dialog;