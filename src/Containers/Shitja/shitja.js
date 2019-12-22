import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './shitja.module.css';
import { getCurrentGame } from '../../Actions/gamesetupactions';
import { getAllGamesActionHandler } from '../../Actions/shitjaActions';
import { Redirect } from "react-router-dom";
import Label from '../../components/Label/label';
import Gray from '../../components/Graybackground/graybackground';
import Selector from '../../components/Selector/selector';
import Regionsales from '../../components/RegionSales/regionsales';

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
        let shitjaPerRegjion = {}
        let regionsalesComponent = []
        if (this.props.currentGameSales.length >=1){
            // let totalPayment = 0;
            this.props.currentGameSales.forEach(element => {
                totalPayment += parseFloat(element.cmimi)
                if (element.ulsa.regjioni.emri in shitjaPerRegjion){
                    shitjaPerRegjion[element.ulsa.regjioni.emri] = {nr: shitjaPerRegjion[element.ulsa.regjioni.emri].nr + 1, cmimi:element.cmimi, totali: parseFloat(shitjaPerRegjion[element.ulsa.regjioni.emri].totali) + parseFloat(element.cmimi)}
                }else{
                    shitjaPerRegjion[element.ulsa.regjioni.emri] = {nr: 1, cmimi:element.cmimi, totali:  parseFloat(element.cmimi)}
                }
            });
            regionsalesComponent = Object.entries(shitjaPerRegjion).map((item, index)=>{
                return <Regionsales 
                            regjioni={item[0]}
                            numri={item[1].nr}
                            cmimi={item[1].cmimi}
                            totali={item[1].totali}
                    />
            })
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
                    
                    <h3>Numri i biletave te shitura: {this.props.currentGameSales.length}  / Vlera: {totalPayment} €</h3>
                    { regionsalesComponent }
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