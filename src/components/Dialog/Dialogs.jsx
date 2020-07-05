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
let DualogData = [
    {id:1,name:'Dima'} ,
    {id:2,name:'Sacha'}
];
let MessageData=[
    {id:1, message:"hi, guy!!!!!"},
    {id:2, message:"Coool"}
]
const Dialog =(props)=>{
    return(

                   <div className={s.dialogs}>
                <div className={s.dialogITems}>
                    <Dialogitem name ={DualogData[0].name} id={DualogData[0].id}></Dialogitem>
                    <Dialogitem name ={DualogData[1].name} id={DualogData[1].id}></Dialogitem>



                </div>

                    <div className={s.messages}>
                        <Message message={MessageData[0].message}></Message>
                        <Message message={MessageData[1].message}></Message>

                </div>
                </div>
    )

}
export default Dialog;