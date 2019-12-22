import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import store from './store/';


axios.defaults.baseURL = 'http://127.0.0.1:8000';
class Doc extends React.Component{
    componentDidMount(){
      document.title = "KB RAHOVECI"
    }
  
    render(){
      return(
        <Provider store = { store }>
          <App />
        </Provider>
      )
    }
  }
ReactDOM.render(<Doc />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
