import React, { Component } from "react";
import classes from "../PrintMain/printmain.module.css";
import btnClasses from "../../components/Button/button.module.css";
import ReactToPrint from "react-to-print";
import { connect } from "react-redux";
import { updateSits } from "../../Actions/updateSitsAction";
import Button from "../../components/Button/button";
import ToPrint from "../../components/ToPrint/toprint";

class Printmain extends Component {
  state = {
    print: false,
    ticketCounter: 0
  };

  componentDidMount = () => {
    if (localStorage.getItem("ticketCounter")) {
      this.setState({
        ticketCounter: localStorage.getItem("ticketCounter")
      });
    } else {
      localStorage.setItem("ticketCounter", 0);
    }
  };

  updateSitsHandler = () => {
    this.setState({
      print: true
    });
    let counter = this.state.ticketCounter;
    const basketSits = [...this.props.ticketsData];
    console.log("SITS TO UPDATE:", basketSits);
    const toUpdateData = basketSits.map((sits, indx) => {
      counter++;
      return {
        id: sits[0][1].id,
        regjioni: sits[0][1].regjioni.id,
        reshti: sits[0][1].reshti.id,
        ulsa: sits[0][1].ulsa,
        statusi: true,
        cmimi: sits[0][1].cmimi
      };
    });

    this.props.updateSits(
      toUpdateData,
      this.props.refresh,
      localStorage.getItem("currentGameID")
    );

    this.setState(prevState => {
      return { ticketCounter: counter };
    });
    localStorage.setItem("ticketCounter", counter);
  };

  printHandler = () => {};

  render() {
    return (
      <div className={classes.printMain}>
        <div>
          <Button btntype="red" click={this.props.close} title="Mbylle" />

          <ReactToPrint
            trigger={() => (
              <button className={btnClasses.greenButton}>PRINTO</button>
            )}
            content={() => this.componentRef}
            onAfterPrint={this.updateSitsHandler}
          />
        </div>
        <br />
        <br />

        <div ref={el => (this.componentRef = el)}>
          <ToPrint
            ticketsData={this.props.ticketsData}
            titulli={this.props.currentGametitulli}
            ndeshja={this.props.currentGamendeshja}
            data={this.props.currentGamedata}
            ora={this.props.currentGameora}
            data2={this.props.currentGamedataGame2}
            ora2={this.props.currentGameoraGame2}
            data3={this.props.currentGamedataGame3}
            ora3={this.props.currentGameoraGame3}
            titulli2={this.props.currentGametitulli2}
            titulli3={this.props.currentGametitulli3}
            totalPrice={this.calclTotalPRice}
            tipetEndeshjeve={this.props.llojetNdeshjet}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentGameID: state.currentGameID,
    currentGametitulli: state.currentGametitulli,
    currentGamendeshja: state.currentGamendeshja,
    currentGamedata: state.currentGamedata,
    currentGameora: state.currentGameora,
    llojetNdeshjet: state.llojetNdeshjet,
    currentGamedataGame2: state.currentGamedataGame2,
    currentGameoraGame2: state.currentGameoraGame2,
    currentGamedataGame3: state.currentGamedataGame3,
    currentGameoraGame3: state.currentGameoraGame3,

    currentGametitulli2: state.currentGametitulli2,
    currentGametitulli3: state.currentGametitulli3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSits: (data, refresh, currentGameID) => {
      dispatch(updateSits(data, refresh, currentGameID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Printmain);
