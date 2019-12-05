import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './shitja.module.css';
import { getCurrentGame } from '../../Actions/gamesetupactions';
import { getAllGamesActionHandler } from '../../Actions/shitjaActions';
import { Redirect } from "react-router-dom";
import Label from '../../components/Label/label';
import Button from '../../components/Button/button';
import Gray from '../../components/Graybackground/graybackground';
import Selector from '../../components/Selector/selector';

class Shitja extends Component {

    state = {
        selectGameID:null
    }

    componentDidMount() {
        this.props.getGameHandler()
        this.props.getALLGamesHandler(this.props.currentGameID)
    }
    
    handleChange = (event) =>{
        // console.log(event)
        this.setState({
            selectGameID: event.target.value
        })
        this.props.getALLGamesHandler(event.target.value)
    }
 
    closeGameSetup = (e) => {
        this.setState({
            showShitja: false
        })
    }

    render() {
        const currentGameId = (this.state.selectGameID==null)?localStorage.getItem('currentGameID'):this.state.selectGameID;
        // const currentGameId = localStorage.getItem('currentGameID')
        // console.log("SHOWSHITJA.JS STORE123: ", this.props);
        const redirectCom = (this.props.showShitja)? <Redirect to='/main/shitja' />:<Redirect to='/main' />;
        let totalPayment = 0;
        if (this.props.currentGameSales.length >=1){
            // let totalPayment = 0;
            this.props.currentGameSales.forEach(element => {
                totalPayment += element.cmimi
                
            });
        }
        return (
            
            <React.Fragment>
                { redirectCom }
                <Gray/>   
                <div className={classes.region}>
                    <div>
                        <button onClick={this.props.hideSitsHandler} className={classes.closeButton}>Mbyllee</button>
                        
                    </div>
                    <div className={classes.regionContent}>
                    
                    <Label titulli="Ndeshja: " />
                    <br/>
                        <Selector
                            inputID = "currentGamendeshja" 
                            list={this.props.allGames} 
                            change={this.handleChange}
                            selectedItem={currentGameId}
                        />  
                    <br/>
                    <br/>
                    <h2>Numri i biletave te shitura: {this.props.currentGameSales.length}</h2>
                    <h2>Vlera: {totalPayment} €</h2>
                    </div>
                </div>

                
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        showShitja: state.showShitja,
        currentGametitulli: state.currentGametitulli,
        currentGamendeshja: state.currentGamendeshja,
        currentGamedata: state.currentGamedata,
        currentGameora: state.currentGameora,
        llojetEndeshjeve: state.llojetNdeshjet,
        allGames: state.allGames,
        currentGameID: state.currentGameID,
        currentGameSales: state.currentGameSales
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideSitsHandler: ()=>{
            const action = {
            type: 'HIDE_SHITJA'
        }
        
        dispatch(action);
        },
        getGameHandler: ()=>{
            dispatch(getCurrentGame())
        },
        getALLGamesHandler: (game)=>{
            dispatch(getAllGamesActionHandler(game))
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shitja);