import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './sitsstatus.module.css';
// import bgSalla from '../../images/SALLA_HD.jpg';
import bgSalla from './SALLA_HD.jpg';
import { Redirect } from "react-router-dom";
import Label from '../../components/Label/label';
import Button from '../../components/Button/button';
import Gray from '../../components/Graybackground/graybackground';
import {cordinates} from './cordinates';
import { getTakenSitsActionHandler } from '../../Actions/takenSitsAction';

class SitStatus extends Component {
    state = {
        backgroundImage: "url(" + bgSalla + ")",
        canvas: cordinates
    }
    
    closeGameSetup = (e) => {
        this.setState({
            showsits: false
        })
    }

    drawbackground = (cords)=> {

        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(cords[0],cords[1],cords[2],cords[3]);
    }

    refresh = () =>{
        this.props.takenSitsAction();
    }

    componentDidMount() {
        this.props.takenSitsAction();

        this.timerID = setInterval(
            () => this.refresh(),
            5000
          );
    }

    componentDidUpdate(){
        for (let item in this.props.takenSits){
            if (this.props.takenSits[item].ulsa != "0"){
                this.drawbackground(eval(this.props.takenSits[item].cordinata));
            }
            // this.drawbackground(eval(this.props.takenSits[item].cordinata));
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    render() {
        const redirectCom = (this.props.showSits)? <Redirect to='/main/sits' />:<Redirect to='/main' />;
       

        
        return (
            
            <React.Fragment>
                <Gray/>   
                <div className={classes.region}>
                    { redirectCom }

                    <button onClick={this.props.hideSitsHandler} className={classes.closeButton}>x</button>
                    <canvas id="myCanvas" name="myCanvas" width="1163" height="838"  style={{backgroundImage: "url(../" + bgSalla + ")"}} ></canvas>
                    {/* <canvas id="myCanvas" name="myCanvas" width="1163" height="838"  style={{backgroundImage: "url(" + bgSalla + ")"}} ></canvas> */}

                </div>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        showSits: state.showSits,
        gameIsReady: state.gameIsReady,
        currentGametitulli: state.currentGametitulli,
        currentGamendeshja: state.currentGamendeshja,
        currentGamedata: state.currentGamedata,
        currentGameora: state.currentGameora,
        llojetEndeshjeve: state.llojetNdeshjet,
        takenSits: state.takenSits,
        updateTakenSits: state.updateTakenSits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideSitsHandler: ()=>{
            const action = {
            type: 'HIDE_SITS'
        }
        
        dispatch(action);
        },

        takenSitsAction : () =>{
            dispatch(getTakenSitsActionHandler())
        },
        
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SitStatus);