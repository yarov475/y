import React from "react";
import s from  './Dialog.module.css'
import Message from "./Messages/Message";
import Dialogitem from "./DialogsItem/Dialogitemtem";



const Dialogs =(props)=>{

    let DialogsElement=props.state.dialogs.map(d=><Dialogitem name ={d.name} id={d.id}/>);

    let MessagesElement=props.state.messages.map(m=> <Message message={m.message}/>);
    let newPostElement=React.createRef();
    let addPost=()=>{
        let text = newPostElement.current.value;
        alert(text);
    }

    return(


                   <div className={s.dialogs}>

                <div className={s.dialogITems}>
                    {DialogsElement}
                    <img src='https://cdn.cnn.com/cnnnext/dam/assets/200624161858-01-dolphin-tools-learning-medium-plus-169.jpg'></img>
                </div>
                    <div className={s.messages}>
                        {MessagesElement}
                       <div><textarea ref={newPostElement}></textarea> </div>
                      <div> <button onClick={addPost}>ADD POST</button> </div>
                </div>
                </div>
    )

}
export default Dialogs;