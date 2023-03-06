import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
           <div className={s.dialogItems}>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/1">
                   Movsar
                   </NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/2">
                   Ahmad
               </NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/3">
                       Iman
               </NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/4">
                       Bilal
               </NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/5">
                       Lilia
               </NavLink>
               </div>
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