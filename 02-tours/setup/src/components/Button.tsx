import React from "react"
import { ButtonProps } from "types/components"

const Button = ({children, onClick, styles}: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${styles}`}>{children}</button>
    )
}

export default Button