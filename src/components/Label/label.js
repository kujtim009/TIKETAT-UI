import React from 'react'
import classes from './label.module.css';

export default function label(props) {
    return (
        <React.Fragment>
            <label className={classes.label}>{props.titulli}</label> 
        </React.Fragment>
    )
}