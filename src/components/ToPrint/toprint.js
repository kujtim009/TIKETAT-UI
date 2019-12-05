import React, { Component } from 'react'
import classes from './toprint.module.css';
import Ticket from '../../components/Ticket/ticket';


class ToPrint extends Component {
    render() {
        let ticketNumber = Number(localStorage.getItem("ticketCounter"))
        const displayTickets = this.props.ticketsData.map((item, indx)=>{
            ticketNumber ++
            if (indx >=1 || item != ''){
                return <Ticket key={indx} 
                            ulsa={item[0][1].ulsa}
                            regioni = {item[0][1].regjioni.emri} 
                            hyrja = {item[0][1].regjioni.hyrja}
                            reshti = {item[0][1].reshti.emri} 
                            cmimi = {item[0][1].cmimi}
                            calcTotPRice = { this.calclTotalPRice }
                            titulli = { this.props.titulli }
                            ndeshja = { this.props.ndeshja }
                            ndeshjaTitulli = { this.props.currentGamendeshja }
                            data = { this.props.data }
                            ora = { this.props.ora }
                            numri = { ticketNumber }
                            tipetEndeshjeve = {this.props.tipetEndeshjeve}
                        />
            }
            
        })

        return (
            <div className={classes.toprint}>
                { displayTickets }
            </div>
        )
    }
}

export default ToPrint