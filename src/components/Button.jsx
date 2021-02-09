import React from 'react';
import "./Button.css";

const isOp = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const Button = props => (
    <div className={`button-wrapper ${isOp(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)

export default Button;