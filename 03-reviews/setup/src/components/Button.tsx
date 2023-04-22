import React from "react"
import { ButtonProps } from "types"

export default function Button({styles, onClick, svg, children}: ButtonProps) {
    return (
        <button className={styles} onClick={onClick}>{svg}{children}</button>
    )
}
