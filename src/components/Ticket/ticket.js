import React, { Component } from 'react'
import classes from '../Ticket/ticket.module.css';
import Barcode from 'react-barcode';


class Ticket extends Component {
    state = {
        isDisabled: true,
        gateOpens:""
    }

    componentDidMount() {
        let gateOpens = new Date(new Date().toDateString() + " " + this.props.ora);

        gateOpens.setHours(gateOpens.getHours() - 1);
        this.setState({
            gateOpens: gateOpens.toTimeString().substring(0, 8)
        })
    }
    
    render() {
            const tipi = this.props.tipetEndeshjeve.filter((item)=>{
                if (item['id'] == this.props.ndeshja){
                    return true
                }
                else{
                    return false
                } 
            })
            let barcodeCode = this.props.numri.toString() + this.props.reshti.toString() + this.props.data.toString() + this.props.ora.toString()
            barcodeCode = barcodeCode.replace(/[^a-zA-Z0-9]/g, "");
            const ulsa = (this.props.regioni == "KMB")? "Në këmbë":this.props.ulsa

            
            
            
        return (
            <div className={classes.ticket}>
                <div className={classes.left}>
                        <div className={classes.header}>

                            <div className={classes.barcode}>   
                                <div className={classes.barcodeContent}>   
                     
                                <Barcode value={barcodeCode} fontSize={16} height={30} width={1}/>
                                </div> 
                            </div> 

                                <div className={classes.topInfoBlock}>
                                    <span className={ classes.titulliShqip }>Cmimi</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Price</span><br className={classes.br}/>
                                    <span className={ classes.titulliInfo }>{this.props.cmimi} .00 €</span>
                                </div>
                                <div className={classes.topInfoBlock}>
                                    <span className={ classes.titulliShqip }>Data</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Date</span><br className={classes.br}/>
                                    <span className={ classes.titulliInfo }>{this.props.data}</span>   
                                </div>
                                <div className={classes.topInfoBlock}>
                                    <span className={ classes.titulliShqip }>Ora</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Time</span><br className={classes.br}/>
                                    <span className={ classes.titulliInfo }>{this.props.ora}</span>
                                </div>
                                <div className={classes.topInfoBlock}>
                                    <span className={ classes.titulliShqip }>Vendi</span><br/>
                                    <span className={ classes.titulliEng }>Place</span><br/>
                                    <span className={ classes.titulliInfo }>Mizahir Isma</span>
                                </div>
                                <div className={classes.topInfoBlock}>
                                    <span className={ classes.titulliShqip }>Dy. hapen</span><br/>
                                    <span className={ classes.titulliEng }>Gate opens</span><br/>
                                    
                                    <span className={ classes.titulliInfo }>{this.state.gateOpens}</span>
                                </div>
                                <div className={classes.topInfoBlock}>
                                    <span className={ classes.titulliShqip }>Nr.i biletes</span><br/>
                                    <span className={ classes.titulliEng }>No. of ticket</span><br/>
                                    <span className={ classes.titulliInfo }>{this.props.numri}</span><br/> 
                                </div>
                        </div>
                        <div className={classes.titulli}>
                            <span className={ classes.titulliShqip }> {tipi[0]['titulli']} </span>
                            <br/>
                            {this.props.titulli}
                        </div>
                        <div className={classes.footer}>
                                <div className={classes.bottomInfoBlock}>
                                    <span className={ classes.titulliShqip }>Hyrja</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Gate</span><br className={classes.br}/>
                                    <hr/>
                                    <span className={ classes.titulliInfoBottom }>{this.props.hyrja}</span>   
                                </div>
                                <div className={classes.bottomInfoBlock}>
                                    <span className={ classes.titulliShqip }>Blloku</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Block</span><br className={classes.br}/>
                                    <hr/>
                                    <span className={ classes.titulliInfoBottom }>{this.props.regioni}</span>
                                </div>
                                <div className={classes.bottomInfoBlock}>
                                    <span className={ classes.titulliShqip }>Rreshti</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Row</span><br className={classes.br}/>
                                    <hr/>
                                    <span className={ classes.titulliInfoBottom }>{this.props.reshti}</span>
                                </div>
                                <div className={classes.bottomInfoBlock}>
                                    <span className={ classes.titulliShqip }>Ulsja</span><br className={classes.br}/>
                                    <span className={ classes.titulliEng }>Seat</span><br className={classes.br}/>
                                    <hr/>
                                    <span className={ classes.titulliInfoBottom }>{ulsa}</span>
                                </div>
                        </div>

                </div>
                <div className={classes.right}>
                    
                    <span className={ classes.titulliShqip }>{tipi[0]['titulli']}</span><br className={classes.br}/>
                    <span className={ classes.titulliShqip }>{this.props.titulli}</span><br className={classes.br}/>
                    <hr/>
                    <span className={ classes.titulliShqip }>Hyrja: </span> <span className={ classes.titulliInfoRight }>{this.props.hyrja} </span><br className={classes.br}/>
                    <span className={ classes.titulliShqip }>Blloku: </span> <span className={ classes.titulliInfoRight }>{this.props.regioni} </span><br className={classes.br}/>
                    <span className={ classes.titulliShqip }>Rreshti: </span><span className={ classes.titulliInfoRight }>{this.props.reshti} </span><br className={classes.br}/>
                    <span className={ classes.titulliShqip }>Ulsja: </span><span className={ classes.titulliInfoRight }>{ulsa} </span><br className={classes.br}/>
                    <hr/>
                    <span className={ classes.titulliShqip }>Data: </span> <span className={ classes.titulliInfoRight }>{this.props.data}</span><br className={classes.br}/>
                    <span className={ classes.titulliShqip }>Ora: </span> <span className={ classes.titulliInfoRight }>{this.props.ora}</span><br className={classes.br}/>
                    <span className={ classes.titulliShqip }>Cmimi: </span> <span className={ classes.titulliInfoRight }>{this.props.cmimi}.00 €</span><br className={classes.br}/>
                </div>
            </div>
        )
    }
}



export default Ticket;