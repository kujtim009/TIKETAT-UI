import React from 'react'
import classes from '../../components/MainGrid/maingrid.module.css';

function Maingrid() {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.lindja}>
                <div className={classes.regjionet}>
                L111
                </div>
                <div className={classes.regjionet}>
                L110
                </div>
                <div className={classes.regjionet}>
                L109
                </div>
            </div>


            <div className={classes.veriu}>
                <div className={classes.regjionetVeri}>
                V112
                </div>
                <div className={classes.regjionetVeri}>
                V113
                </div>
            </div>

            <div className={classes.jugu}>
                <div className={classes.regjionetJug}>
                        <div className={classes.regjionetJugA}>
                        J105
                        </div>
                        <div className={classes.regjionetJugA}>
                        J107
                        </div>
                </div>
                <div className={classes.regjionetJug}>
                    <div className={classes.regjionetJugA}>
                        J104
                        </div>
                        <div className={classes.regjionetJugA}>
                        J106
                        </div>
                </div>
            </div>

            <div className={classes.perendim}>
                <div className={classes.regjionet}>
                P101
                </div>
                <div className={classes.regjionet}>
                P102
                </div>
                <div className={classes.regjionet}>
                P103
                </div>
            </div>
        </div>
    )
}

export default Maingrid
