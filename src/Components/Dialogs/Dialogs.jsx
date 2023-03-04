import React from 'react'
import s from './Dialogs.module.css'


const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
           <div className={s.dialogItems}>
               <div className={s.dialog}>Movsar</div>
               <div className={s.dialog}>Ahmad</div>
               <div className={s.dialog}>Iman</div>
               <div className={s.dialog}>Bilal</div>
               <div className={s.dialog}>Lilia</div>
           </div>
           <div className={s.messages}>
               <div className={s.message}>Hello</div>
               <div className={s.message}>How are you?</div>
               <div className={s.message}>Yep</div>
               <div className={s.message}>See you tomorrow</div>
           </div>
        </div>
    )
}

export default Dialogs