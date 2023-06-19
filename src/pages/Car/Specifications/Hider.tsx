import React, {JSX, ReactNode, useState} from "react";

interface HiderProps{
    children:ReactNode[]
}

const Hider = ({children}:HiderProps) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            {isOpen ? children : children.slice(0, Math.trunc(children.length / 2))}
            <p style={{color: "red", fontWeight: 500}} onClick={() => {
                setOpen(!isOpen)
            }}>{isOpen ? "Свернуть" : "Развернуть"}</p>
        </>
    )
}

export default Hider