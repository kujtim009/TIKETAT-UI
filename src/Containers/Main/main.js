import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../../components/Header/header';
import Spinner from '../../components/Spinner/spinner';
import MainGreed from '../../components/MainGrid/maingrid';
import {checkAuthenticityAction} from '../../Actions/loginActions';
import { getCurrentGame } from '../../Actions/gamesetupactions';
class Main extends Component {

    componentDidMount() {
        this.props.getGameHandler()
        console.log("IS AUTHENTICATED: ", this.props.isauthenticated)
        console.log("IS ADMIN: ", this.props.isAdmin)
    }

    render() { 
        let redirectCom = null;
        
        if (this.props.isauthenticated === false && localStorage.getItem('token') !== null)
            {   
                this.props.checkAuthenticityHandler()
                console.log("NOT AUTHENTICATED")
        }
        
        if(this.props.isauthenticated === false && localStorage.getItem('token') === null){
            // localStorage.removeItem('token');
            redirectCom = <Redirect to='/' />;
        }
        else if (this.props.showSits)
            {redirectCom = <Redirect to='/main/sits' />;}
        else if (this.props.showGameSetup) 
            {redirectCom = <Redirect to='/main/setup' />;}
        else if (this.props.showShitja) 
            {redirectCom = <Redirect to='/main/shitja' />;}
        else
            {redirectCom = <Redirect to='/main' />;}
    
        // const redirectCom = (this.props.showGameSetup)? <Redirect to='/main/setup' />:<Redirect to='/main' />;
        // const redirectComSits = (this.props.showSits)? <Redirect to='/main/sits' />:<Redirect to='/main' />;
        const username = localStorage.getItem('username');
        const spinner = this.props.showspinner 
        ?<Spinner showspinner={ this.props.showspinner }/> 
        :null;
        return ( 
            <React.Fragment>
                { redirectCom }
                {spinner}
                <div>
                    
                    <Header 
                        showsetup={this.props.showSetupGameHandler} 
                        showsits={this.props.showSitsHandler}
                        showshitja={this.props.showShitjaHandler}
                        username={ username }
                        isadmin={this.props.isAdmin}
                    />

                </div>
                <div>
                <MainGreed />
                </div>
            </React.Fragment>
         );
    }
}
 

function mapStateToProps(state){
    return {
        token: state.token,
        username: state.username,
        isauthenticated: state.isauthenticated,
        isAdmin: state.isAdmin,
        showspinner: state.showspinner,
        showGameSetup: state.showGameSetup,
        showSits: state.showSits,
        showShitja: state.showShitja
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        showSetupGameHandler: () =>{
            const action = {
                type: 'SHOW_SETUP_GAME'
            }

            dispatch(action);
        },
        showSitsHandler: () =>{
            const action = {
                type: 'SHOW_SITS'
            }

            dispatch(action);
        },
        showShitjaHandler: () =>{
            const action = {
                type: 'SHOW_SHITJA'
            }

            dispatch(action);
        },
        checkAuthenticityHandler: () =>{
            dispatch(checkAuthenticityAction())
        },
        getGameHandler: ()=>{
            dispatch(getCurrentGame())
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);