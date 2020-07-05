import React from "react";
import s from  './Dialog.module.css'


const Dialog =(props)=>{
    return(
                   <div className={s.dialogs}>
                <div className={s.dialogITems}>
                    <div className={s.dialog + '' + s.active} >Dima</div>
                <div className={s.dialog}>Vova</div>
                    <div className={s.dialog}>leha</div>
                <div className={s.dialog}>Jon</div>
                    <div className={s.dialog}>Micle</div>
                <div className={s.dialog}>Andru</div>
                </div>

                    <div className={s.messages}>
                        <div className={s.dialog}>Hi</div>
                        <div className={s.dialog}>Love</div>
                        <div className={s.dialog}>Hello</div>

                </div>
                </div>
    )

}
export default Dialog;