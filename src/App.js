import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Containers/Login/login';
import Main from './Containers/Main/main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gamesetup from './Containers/GameSetup/gamesetup';
import SitsStatus from './Containers/SitsStatus/sitsstatus';
import Shitja from './Containers/Shitja/shitja';
import {checkAuthenticityAction} from './Actions/loginActions';

class App extends Component {

  componentDidMount(){
    this.props.checkAuthenticityHandler()
  }

  render() {
    return (
        <Router basename="/ticketer/">
          <div className="App">
            <Route path='/' exact component={Login} />
            <Route 
              path='/main'
              render={(props) => <Main {...this.props} isauthenticated={this.props.isauthenticated} isadmin={this.props.isadmin} />}
              />
            
            <Route path='/main/setup' exact component={Gamesetup} />
            <Route path='/main/sits' exact component={SitsStatus} />
            <Route path='/main/shitja' exact component={Shitja} />
          </div>
        </Router>

    );
  }
}



function mapStateToProps(state){
  return {
    isauthenticated: state.isauthenticated,
    isadmin: state.isAdmin,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
      checkAuthenticityHandler: () =>{
          dispatch(checkAuthenticityAction())
      }
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
