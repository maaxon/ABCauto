import React, {JSX, ReactNode} from "react";
import classes from "../Car.module.scss";
import Hider from "./Hider";

interface SpecificationProps{
    children:ReactNode[],
    title:string,
    wrapClass?:string,
    mode:string
}

const Specification = ({children, title, wrapClass = '', mode}:SpecificationProps) => {
    return (
        <section className={`${classes.specifications} ${wrapClass}`}>
            <h3>{title}</h3>
            <div className={classes.elements}>
                {mode === "mobile" ? <Hider>{children}</Hider> : children}
            </div>
        </section>

    )
}

export default Specification