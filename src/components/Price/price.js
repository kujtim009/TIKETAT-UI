import React from 'react';
import classes from './price.module.css';


export default function Price(props) {
    return (
        <div className={classes.priceContainer}>
            <div className={classes.counter}>
                {props.counter}&nbsp;&nbsp;&nbsp;
            </div>

            <span className={classes.caption}>
            &nbsp;&nbsp;&nbsp;Totali:
            </span>
            <br />
            <span className={classes.price}>
            &nbsp;&nbsp;€ {props.price}
            </span>                  
        </div>
    )
}
