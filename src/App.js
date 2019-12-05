import React from 'react';
import { Provider } from 'react-redux';
import Login from './Containers/Login/login';
import Main from './Containers/Main/main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gamesetup from './Containers/GameSetup/gamesetup';
import SitsStatus from './Containers/SitsStatus/sitsstatus';
import Shitja from './Containers/Shitja/shitja';
import store from './store/';


function App(props) {
  return (
    <Provider store = { store }>
      <Router basename="/ticketer/">
        <div className="App">
          <Route path='/' exact component={Login} />
          <Route path='/main' component={Main} />
          <Route path='/main/setup' exact component={Gamesetup} />
          <Route path='/main/sits' exact component={SitsStatus} />
          <Route path='/main/shitja' exact component={Shitja} />
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
