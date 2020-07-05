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
let messages  =
    [
        {id:1, message:"hi, guy!!!!!"},
        {id:2, message:"Coool"}
    ]
let dialogs = [
    {id:1,name:'Dima'} ,
    {id:2,name:'Sacha'}
];
let DialogsElement=dialogs.map(d=><Dialogitem name ={d.name} id={d.id}/>);

let MessagesElement=messages.map(m=> <Message message={m.message}/>);
const Dialog =(props)=>{
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
export default Dialog;