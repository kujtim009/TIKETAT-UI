import React, { Component } from 'react'
import classes from './regionsales.module.css'

export default class Regionsales extends Component {
    render() {
        return (
            <div className={classes.maingreed}>
                <div className={classes.regjioni}>
                    Regjioni: {this.props.regjioni}
                </div>
                <div className={classes.numri}>
                    Numri: {this.props.numri}   
                </div>
                <div className={classes.cmimi}>
                    Cmimi: {this.props.cmimi} € 
                </div>
                <div className={classes.totali}>
                    Totali: {this.props.totali} €
                </div>
            </div>
        )
    }
}
