
import React from 'react'
import { LineScale } from 'react-pure-loaders';
import classes from '../Spinner/spinner.module.css';

export default function Spinner(props) {
    return (
        <div className={classes.spinner}>
            <LineScale color="#123abc" loading={props.showspinner}/>
        </div>
    )
}
