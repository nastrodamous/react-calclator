import React from "react"
import './Input.css';

export const Input = (props) => (
    <div className="input">{props.input}</div>
);

export const InputShowEquation = (props) => (
    <div className="inputShowEquation">{props.equation}</div>
);