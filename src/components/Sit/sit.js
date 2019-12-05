import React, { Component } from 'react'
import classes from '../Sit/sit.module.css';


class Sit extends Component {
    state = {
        isDisabled: false
    }

    // clicHandler = () => {
    //     console.log("SIT.js ClickHandler");
    //     this.setState({
    //         isDisabled: true
    //     });
    //     const performClick = this.props.click;
    //     performClick();
    // }

    componentDidUpdate(){
        // console.log("SIT.JS STATE:", this.state)
    }
    render() {
        let myStyle = null;
        if (this.props.status){
            myStyle = {
                backgroundColor: "red",
                color: "white"
            }
        }

        let disabled = false;
        // if (this.props.status || this.props.disable){
        //     disabled = true;
        // }

        if (this.props.disable){
                disabled = true;
            }
        return (
            <button className={classes.sit} 
                style={myStyle} 
                onClick={this.props.addtobasket}
                disabled={disabled}
                >
                {this.props.num}
            </button>
        )
    }
}



export default Sit;