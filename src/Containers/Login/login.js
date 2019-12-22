import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { postLoginCall } from '../../Actions/loginActions';
import LoginForm from '../../components/LoginForm/loginform';
import Spinner from '../../components/Spinner/spinner';

class Login extends Component {
state = {
    email:"",
    password:"",
    submited: false
}


onChangeHandler = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
    
}


submitHandler = (event) => {
    event.preventDefault();
    this.props.onClick(this.state.email, this.state.password)
    this.setState({
        submited: true
    })
}

renderRedirect = () => {
    if (this.props.isauthenticated === true || localStorage.getItem('token') != null) {
        return <Redirect to='/main' />
    }else{
        return <Redirect to='/' />  
    }
  }


render() {
    const spinner = this.props.showspinner 
    ?<Spinner showspinner={ this.props.showspinner }/> 
    :null;
    return (
        <React.Fragment>
            {this.renderRedirect()}
            <LoginForm message={this.props.loginMessage} changeprm={(event) => this.onChangeHandler(event) } clickSubmitHandler={this.submitHandler}/>
            {spinner}
        </React.Fragment> 
      );
    }
     
}

function mapStateToProps(state){
    return {
        token: state.token,
        username: state.username,
        isauthenticated: state.isauthenticated,
        showspinner: state.showspinner,
        isAdmin: state.isAdmin,
        loginMessage: state.loginMessage
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        onClick: (email, password)=>{
            console.log('BUTTON CLICKED');
            dispatch(postLoginCall(email, password))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);