import React, { Component } from "react";
import classes from "./toprint.module.css";
import Ticket from "../../components/Ticket/ticket";
import TicketFinal8 from "../../components/Ticket/ticketFinal8";
class ToPrint extends Component {
  render() {
    let ticketNumber = Number(localStorage.getItem("ticketCounter"));
    const displayTickets = this.props.ticketsData.map((item, indx) => {
      ticketNumber++;
      if (indx >= 1 || item !== "") {
        console.log("TO PRINT: ", this.props.ndeshja);
        if (this.props.ndeshja !== 4) {
          return (
            <Ticket
              key={indx}
              ulsa={item[0][1].ulsa}
              regioni={item[0][1].regjioni.emri}
              hyrja={item[0][1].regjioni.hyrja}
              reshti={item[0][1].reshti.emri}
              cmimi={item[0][1].cmimi}
              calcTotPRice={this.calclTotalPRice}
              titulli={this.props.titulli}
              ndeshja={this.props.ndeshja}
              ndeshjaTitulli={this.props.currentGamendeshja}
              data={this.props.data}
              ora={this.props.ora}
              numri={ticketNumber}
              tipetEndeshjeve={this.props.tipetEndeshjeve}
            />
          );
        } else {
          return (
            <TicketFinal8
              key={indx}
              ulsa={item[0][1].ulsa}
              regioni={item[0][1].regjioni.emri}
              hyrja={item[0][1].regjioni.hyrja}
              reshti={item[0][1].reshti.emri}
              cmimi={item[0][1].cmimi}
              calcTotPRice={this.calclTotalPRice}
              titulli={this.props.titulli}
              ndeshja={this.props.ndeshja}
              ndeshjaTitulli={this.props.currentGamendeshja}
              data={this.props.data}
              ora={this.props.ora}
              data2={this.props.data2}
              ora2={this.props.ora2}
              data3={this.props.data3}
              ora3={this.props.ora3}
              titulli2={this.props.titulli2}
              titulli3={this.props.titulli3}
              numri={ticketNumber}
              tipetEndeshjeve={this.props.tipetEndeshjeve}
            />
          );
        }
      } else {
        return null;
      }
    });

    return <div className={classes.toprint}>{displayTickets}</div>;
  }
}

export default ToPrint;
