import React, { Component } from 'react'
import classes from '../Row/row.module.css';

export default class Row extends Component {
    render() {
        return (
            <div className={classes.rowStyling}>
                <div className={classes.rowTitle}>
                    {this.props.name}
                </div>
                {this.props.children}
            </div>
        )
    }
}
