import React from 'react'

const Button: React.FC = ({children, onClick, styles}: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>{children}</button>
    )
}

export default Button