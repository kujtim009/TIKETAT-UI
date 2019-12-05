import React, { Component } from 'react'
import classes from '../PrintMain/printmain.module.css';
import btnClasses from '../../components/Button/button.module.css';
import ReactToPrint from 'react-to-print';
import { connect } from 'react-redux';
import { updateSits } from '../../Actions/updateSitsAction';
import Button from '../../components/Button/button';
import ToPrint from '../../components/ToPrint/toprint';
import Print from '../../components/Print/print';

class Printmain extends Component {
    state = {
        print: false,
        ticketCounter: 0
    }

    componentDidMount = () => {
        if (localStorage.getItem("ticketCounter")) {
            this.setState({
                ticketCounter: localStorage.getItem("ticketCounter")
            })
        }else{
            localStorage.setItem("ticketCounter", 0)
        }
    }

    updateSitsHandler = () => {
        this.setState({
            print:true,
            
        })
        let counter = this.state.ticketCounter;
        const basketSits = [...this.props.ticketsData]
        const toUpdateData = basketSits.map((sits, indx)=>{
            counter++
            return {id: sits[0][1].id,
                    regjioni: sits[0][1].regjioni.id,
                    reshti: sits[0][1].reshti.id,
                    ulsa: sits[0][1].ulsa,
                    statusi: true}
        })

        this.props.updateSits(toUpdateData, this.props.refresh, localStorage.getItem('currentGameID'));
        
        this.setState(prevState => {
                return {ticketCounter: counter}
             })
        localStorage.setItem("ticketCounter", counter)
    }

    printHandler = () =>{

    }

    render() {

        // const displayTickets = this.props.ticketsData.map((item, indx)=>{
        //     if (indx >=1 || item != ''){
        //         return <Ticket key={indx} 
        //                     ulsa={item[0][1].ulsa}
        //                     regioni = {item[0][1].regjioni.emri} 
        //                     reshti = {item[0][1].reshti.emri} 
        //                     cmimi = {item[0][1].cmimi}
        //                     calcTotPRice = { this.calclTotalPRice }
        //                 />
        //     }
            
        // })
        let printo = (this.state.print)? <Print click={this.updateSitsHandler}/> : <ToPrint ticketsData={ this.props.ticketsData } totalPrice = { this.calclTotalPRice }
   />
        return (
            <div className={classes.printMain}>
                <div>
                    <Button btntype="red" click={this.props.close} title="Mbylle"/>
                    {/* <Button btntype="green" click={this.updateSitsHandler} title="Printo"/> */}
                   
                    <ReactToPrint
                        trigger={() =>  <button className={btnClasses.greenButton}>PRINTO</button>}
                        content={() => this.componentRef}
                        onAfterPrint={this.updateSitsHandler}
                    />

                   
                </div>
                <br/><br/>
               {/* { displayTickets } */}
               
               {/* { printo }  */}
               <div ref={el => (this.componentRef = el)}>
                    <ToPrint 
                        ticketsData={ this.props.ticketsData } 
                        titulli = { this.props.currentGametitulli }
                        ndeshja = { this.props.currentGamendeshja }
                        data = { this.props.currentGamedata }
                        ora = { this.props.currentGameora }
                        totalPrice = { this.calclTotalPRice }
                        tipetEndeshjeve = {this.props.llojetNdeshjet}
                    />
               </div>
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return {
        currentGameID: state.currentGameID,
        currentGametitulli: state.currentGametitulli,
        currentGamendeshja: state.currentGamendeshja,
        currentGamedata: state.currentGamedata,
        currentGameora: state.currentGameora,
        llojetNdeshjet: state.llojetNdeshjet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSits: (data, refresh, currentGameID)=>{
            dispatch(updateSits(data, refresh, currentGameID))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Printmain);