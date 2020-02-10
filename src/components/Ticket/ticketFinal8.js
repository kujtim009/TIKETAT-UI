import React, { Component } from "react";
import classes from "../Ticket/ticketFinal8.module.css";
import Barcode from "react-barcode";
import logo from "../../images/logofin8.png";
class TicketFinal8 extends Component {
  state = {
    isDisabled: true,
    gateOpens: ""
  };

  componentDidMount() {
    console.log("TICKET FINAL 8 mounted");
    let gateOpens = new Date(new Date().toDateString() + " " + this.props.ora);

    gateOpens.setHours(gateOpens.getHours() - 1);
    this.setState({
      gateOpens: gateOpens.toTimeString().substring(0, 8)
    });
  }

  render() {
    const tipi = this.props.tipetEndeshjeve.filter(item => {
      if (item["id"] === this.props.ndeshja) {
        return true;
      } else {
        return false;
      }
    });
    let barcodeCode =
      this.props.numri.toString() +
      this.props.reshti.toString() +
      this.props.data.toString() +
      this.props.ora.toString();
    barcodeCode = barcodeCode.replace(/[^a-zA-Z0-9]/g, "");
    let ulsa = "";

    if (this.props.ulsa === "0" && this.props.regioni === "KMB") {
      ulsa = "Në këmbë";
    } else if (this.props.ulsa === "0" && this.props.regioni !== "KMB") {
      ulsa = "--";
    } else {
      ulsa = this.props.ulsa;
    }

    const ticketPRice =
      this.props.cmimi === 0 ? "Gratis" : this.props.cmimi + " €";

    return (
      <div className={classes.ticket}>
        <div className={classes.mainInfo}>
          <div className={classes.logo}>
            <img src={logo} alt="logo final 8" />
          </div>
          <div className={classes.final8Titulli}>{tipi[0]["titulli"]}</div>
          <div className={classes.bileta}>BILETE / TICKET</div>
          <div className={classes.cmimi}>CMIMI: {ticketPRice}</div>
        </div>
        <div className={classes.firstGame}>
          <span className={classes.titulliShqip}>{this.props.titulli}</span>
          <br className={classes.br} />
          <hr />
          <span className={classes.titulliShqip}>Hyrja: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.hyrja} </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Blloku: </span>{" "}
          <span className={classes.titulliInfoRight}>
            {this.props.regioni}{" "}
          </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Rreshti: </span>
          <span className={classes.titulliInfoRight}>{this.props.reshti} </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Ulsja: </span>
          <span className={classes.titulliInfoRight}>{ulsa} </span>
          <br className={classes.br} />
          <hr />
          <span className={classes.titulliShqip}>Data: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.data}</span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Ora: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.ora}</span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Cmimi: </span>{" "}
          <span className={classes.titulliInfoRight}>{ticketPRice}</span>
          <br className={classes.br} />
        </div>
        <div className={classes.secondGame}>
          <span className={classes.titulliShqip}>{this.props.titulli2}</span>
          <br className={classes.br} />
          <hr />
          <span className={classes.titulliShqip}>Hyrja: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.hyrja} </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Blloku: </span>{" "}
          <span className={classes.titulliInfoRight}>
            {this.props.regioni}{" "}
          </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Rreshti: </span>
          <span className={classes.titulliInfoRight}>{this.props.reshti} </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Ulsja: </span>
          <span className={classes.titulliInfoRight}>{ulsa} </span>
          <br className={classes.br} />
          <hr />
          <span className={classes.titulliShqip}>Data: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.data2}</span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Ora: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.ora2}</span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Cmimi: </span>{" "}
          <span className={classes.titulliInfoRight}>{ticketPRice}</span>
          <br className={classes.br} />
        </div>
        <div className={classes.thirdGame}>
          <span className={classes.titulliShqip}>{this.props.titulli3}</span>
          <br className={classes.br} />
          <hr />
          <span className={classes.titulliShqip}>Hyrja: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.hyrja} </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Blloku: </span>{" "}
          <span className={classes.titulliInfoRight}>
            {this.props.regioni}{" "}
          </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Rreshti: </span>
          <span className={classes.titulliInfoRight}>{this.props.reshti} </span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Ulsja: </span>
          <span className={classes.titulliInfoRight}>{ulsa} </span>
          <br className={classes.br} />
          <hr />
          <span className={classes.titulliShqip}>Data: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.data3}</span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Ora: </span>{" "}
          <span className={classes.titulliInfoRight}>{this.props.ora3}</span>
          <br className={classes.br} />
          <span className={classes.titulliShqip}>Cmimi: </span>{" "}
          <span className={classes.titulliInfoRight}>{ticketPRice}</span>
          <br className={classes.br} />
        </div>
      </div>
    );
  }
}

export default TicketFinal8;
