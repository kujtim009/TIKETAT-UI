import React from 'react'
import classes from './button.module.css';
export default function greenbutton(props) {
    const btnType = (props.btntype=="green")? classes.greenButton: classes.redButton;
    return (
        <React.Fragment>
            <button className={btnType} onClick={props.click}>{props.title}</button>
        </React.Fragment>
    )
}
