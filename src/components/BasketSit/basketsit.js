import React, { Component } from "react";
import classes from "../BasketSit/basketsit.module.css";

class BasketSit extends Component {
  state = {
    isDisabled: true
  };

  clickHandler = () => {
    console.log("BASKETSIT.js ClickHandler");
    const performClick = this.props.click;
    performClick();
  };

  componentDidMount() {
    const caclTotalPRice = this.props.calcTotPRice;
    caclTotalPRice();
  }

  componentWillUnmount() {
    const caclTotalPRice = this.props.calcTotPRice;
    caclTotalPRice();
  }

  render() {
    let myStyle = null;
    if (this.props.status) {
      myStyle = {
        backgroundColor: "red"
      };
    }
    return (
      <button
        className={classes.basketsit}
        style={myStyle}
        onClick={this.clickHandler}
        disabled={this.props.status}>
        <span className={classes.regioniStyle}>{this.props.regioni}</span>
        <br />
        <span className={classes.reshtiStyle}>{this.props.reshti}</span>
        <br />
        <span className={classes.ulsaStyle}>{this.props.ulsa}</span>
      </button>
    );
  }
}

export default BasketSit;
