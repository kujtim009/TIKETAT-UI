import React from 'react'
import classes from './editbox.module.css';

export default function editbox(props) {
    const size = (props.editsize != '')? props.editsize: 30;

    return (
        
        <React.Fragment>
                <input
                    className={classes.editbox}
                    id = {props.inputID}
                    type="text"
                    defaultChecked="Loading!"
                    value={props.val}
                    onChange={props.change}
                    size= {size}
                />
        </React.Fragment>
    )
}
