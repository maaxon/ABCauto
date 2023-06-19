import classes from "./modal.module.scss";
import {ReactNode} from "react";

interface ModalProps{
    active:boolean
    setActive:(active:boolean)=>void
    children:ReactNode
}

const Modal = () =>{
    return(
        <div className={classes.modal}>
            <div className={classes.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Modal