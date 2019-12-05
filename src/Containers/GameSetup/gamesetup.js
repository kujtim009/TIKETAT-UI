import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './gemesetup.module.css';
import { getCurrentGame, changeActionHandler, saveNewGameActionHandler, newGameActionHandler, getPricesActionHandler, updatePriceActionHandler } from '../../Actions/gamesetupactions';
import { Redirect } from "react-router-dom";
import Selector from '../../components/Selector/selector';
import Editbox from '../../components/EditBox/editbox';
import Label from '../../components/Label/label';
import Button from '../../components/Button/button';
import Gray from '../../components/Graybackground/graybackground';
import RegjionPrices from '../../components/RegjionPrice/regjionprice';



class Gamesetup extends Component {
    state = {
        showsetup: true,
        titulli: "",
        ndeshja: "",
        koha: "",
        addNewGame: false,
        date: new Date()
    }
 
    closeGameSetup = (e) => {
        this.setState({
            showsetup: false
        })
    }

    componentDidMount() {
        this.props.getPricesDispatch()
        this.props.getGameHandler()

    }

    handleChange = (e) => {
        const changeAction = this.props.changeHandlerAction
        changeAction(e);
    }
    datatimechange = (e)=> {
        const changedataTimeAction = this.props.changedataTimeHandlerAction
        changedataTimeAction(e);
    }

    handleSaveGame = () => {
        const saveAction = this.props.saveNewGameDispatch
        const data =  {
            "titulli": this.props.currentGametitulli,
            "ndeshja": this.props.currentGamendeshja,
            "data": this.props.currentGamedata,
            "ora": this.props.currentGameora
        }
        saveAction(data);
    }

    handleNewGame = () => {
        const newGameAction = this.props.newGameDispatch;
        newGameAction();
    }

    
    render() {
        const rgnPrices = (this.props.regionPrices.length>0)?this.props.regionPrices.map((item, indx)=>{
            return <tr key={indx}><RegjionPrices key={indx} click={this.props.updatePriceDispatch} rgnPrice={item.cmimi} rgnId={item.regjioni} title={item.regjioni__emri}/></tr>
        }):null

        const redirectCom = (this.props.showGameSetup)? <Redirect to='/main/setup' />:<Redirect to='/main' />;
        let gameTitle = "Loading!";
        let ndeshja = "Loading!";
        let data ='';
        let ora ='';

        if (this.props.gameIsReady){
            gameTitle = this.props.currentGametitulli
            ndeshja = this.props.currentGamendeshja
            data = this.props.currentGamedata
            ora = this.props.currentGameora
        }

        return (
            <React.Fragment>
                <Gray/> 
                <div className={classes.region}>
                { redirectCom }
                <button onClick={this.props.hideGameSetupHandler} className={classes.closeButton}>Mbylle</button>
                
                <h2>Regullimet: {this.props.title}</h2>
                <div className={classes.sitsStyling}>
                <table cellPadding="10">
                  <tbody>
                    <tr>
                        <td>
                            <Label titulli="Titulli:" />
                        </td>
                        <td>
                            <Editbox
                                inputID = "currentGametitulli"
                                change={this.handleChange}
                                val = {gameTitle}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Label titulli="Ndeshja: " />
                        </td>
                        <td>
                            <Selector
                                inputID = "currentGamendeshja" 
                                list={this.props.llojetEndeshjeve} 
                                change={this.handleChange}
                                selectedItem={ndeshja}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Label titulli="Koha: " />
                        </td>
                        <td>
                        
                          
                            <input 
                                id = "currentGamedata"
                                type="date" 
                                onChange={this.handleChange} 
                                value={data}
                            />
                            <input 
                                id = "currentGameora"
                                type="time"
                                onChange={this.handleChange} 
                                value={ora}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                        <Button btntype="green" click={this.handleSaveGame} title="Ruaje"/>
                        <Button btntype="red" click={this.handleNewGame} title="Shto ndeshje"/>
                            
                        
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    Regullimi i cmimeve:
                    <div  className={classes.table2}>
                        <table>
                        <tbody>
                        
                            {/* UPDATE PRICES */}
                            { rgnPrices }  
                            
                        
                        </tbody>
                        </table>
                    </div>

                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        showGameSetup: state.showGameSetup,
        gameIsReady: state.gameIsReady,
        currentGametitulli: state.currentGametitulli,
        currentGamendeshja: state.currentGamendeshja,
        currentGamedata: state.currentGamedata,
        currentGameora: state.currentGameora,
        llojetEndeshjeve: state.llojetNdeshjet,
        regionPrices: state.regionPrices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideGameSetupHandler: ()=>{
            const action = {
            type: 'HIDE_SETUP_GAME'
        }
        
        dispatch(action);
        },

        getGameHandler: ()=>{
            dispatch(getCurrentGame())
        },

        changeHandlerAction: (e) =>{
            dispatch(changeActionHandler(e))
        },

        saveNewGameDispatch: (data) =>{
            dispatch(saveNewGameActionHandler(data))
        },

        newGameDispatch: () =>{
            dispatch(newGameActionHandler())
        },

        getPricesDispatch: () =>{
            dispatch(getPricesActionHandler())
        },

        updatePriceDispatch: (data) =>{
            dispatch(updatePriceActionHandler(data))
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gamesetup);