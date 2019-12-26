import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./region.module.css";
import { showSitsHandler } from "../../Actions/showSitsActions";
import Row from "../../components/Row/row";
import Sit from "../../components/Sit/sit";
import BasketSit from "../../components/BasketSit/basketsit";
import Price from "../../components/Price/price";
import basketImg from "../../images/basket.png";
import Printmain from "../PrintMain/printmain";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import "./basket.css";

class Region extends Component {
  state = {
    basket: [],
    totalPrice: 0,
    basketCount: 0,
    showPrintermain: false,
    refresh: false
  };

  componentDidMount() {
    this.props.showSits(this.props.regionName);
  }

  refreshSitsHandler = () => {
    this.props.showSits(this.props.regionName);
    this.setState({
      basket: []
    });
  };

  showPrintcerMainHandler = () => {
    this.props.showPrintermainAction();
  };

  hidePrintcerMainHandler = () => {
    this.props.hidePrintermainAction();
  };

  addToBasketHandler = (id, status, disable, ulsa) => {
    if ((disable !== true && status !== true) || ulsa === 0) {
      const regionDataArray = Object.entries(this.props.regionData).filter(
        x => {
          return x[1].id === id;
        }
      );

      this.setState(state => {
        const basket = [...state.basket, regionDataArray];
        return {
          basket: basket
        };
      });
    } else if (status === true) {
      if (window.confirm("A jeni i sigurt qe doni ta re-printoni bileten?")) {
        if (this.props.isAdmin) {
          const regionDataArray = Object.entries(this.props.regionData).filter(
            x => {
              return x[1].id === id;
            }
          );

          this.setState(state => {
            const basket = [...state.basket, regionDataArray];
            return {
              basket: basket
            };
          });
        } else {
          alert(
            "Ju duhet te jeni administrator ne menyr qe ta re-printoni bileten!"
          );
        }
      } else {
      }
    }
  };

  removeFromBasket = id => {
    this.setState(state => {
      const basket = [...state.basket];
      return {
        basket: basket.filter(item => {
          return item[0][1].id !== id;
        })
      };
    });
  };

  calclTotalPRice = () => {
    const totalArray = this.state.basket.map((item, indx) => {
      if (item !== "") {
        return item[0][1].cmimi;
      } else {
        return null;
      }
    });

    if (totalArray.length >= 1) {
      const totalPrice = totalArray.reduce((a, b) => a + b);
      this.setState({
        totalPrice: totalPrice,
        basketCount: totalArray.length
      });
    } else {
      this.setState({
        totalPrice: 0,
        basketCount: 0
      });
    }
  };

  render() {
    let rows = {};
    if (this.props.regionData) {
      const sitsObj = this.props.regionData;
      // const sits = Object.entries(sitsObj)

      for (let sit in sitsObj) {
        let tempUlsaID = sitsObj[sit].id;
        let tempUlsa = sitsObj[sit].ulsa;
        let tempReshti = sitsObj[sit].reshti.emri;
        let tempCmimi = sitsObj[sit].cmimi;
        let tempRegioni = sitsObj[sit].regjioni.emri;
        let tempStatusi = sitsObj[sit].statusi;

        // if tempUlsaID
        let disable = false;
        for (let item in this.state.basket) {
          if (this.state.basket[item][0][1] !== undefined) {
            if (
              this.state.basket[item][0][1].id === tempUlsaID &&
              tempUlsa !== "0"
            ) {
              disable = true;
            }
          }
        }

        if (tempReshti in rows) {
          rows[tempReshti].push(
            <Sit
              key={tempUlsaID}
              id={tempUlsaID}
              num={tempUlsa}
              cmimi={tempCmimi}
              region={tempRegioni}
              status={tempStatusi}
              reshti={tempReshti}
              disable={disable}
              isAdmin={this.props.isAdmin}
              addtobasket={() =>
                this.addToBasketHandler(
                  tempUlsaID,
                  tempStatusi,
                  disable,
                  tempUlsa
                )
              }
            />
          );
        } else {
          Object.assign(rows, {
            [tempReshti]: [
              <Sit
                key={tempUlsaID}
                id={tempUlsaID}
                num={tempUlsa}
                cmimi={tempCmimi}
                region={tempRegioni}
                status={tempStatusi}
                reshti={tempReshti}
                disable={disable}
                isAdmin={this.props.isAdmin}
                addtobasket={() =>
                  this.addToBasketHandler(
                    tempUlsaID,
                    tempStatusi,
                    disable,
                    tempUlsa
                  )
                }
              />
            ]
          });
        }
      }
    } else {
      rows = null;
    }
    let rowTitles = [];
    let displayRow = [];
    let counter = 0;

    try {
      rowTitles = Object.keys(rows)
        .sort()
        .reverse();
      for (let t in rowTitles) {
        displayRow.push(
          <Row key={counter} name={rowTitles[t]}>
            {" "}
            {rows[rowTitles[t]]}{" "}
          </Row>
        );
        counter++;
      }
    } catch (error) {}
    const displayBasket = this.state.basket.map((item, indx) => {
      if (indx >= 1 || item !== "") {
        return (
          <CSSTransition key={indx} classNames="basket" timeout={100}>
            <BasketSit
              ulsa={item[0][1].ulsa}
              regioni={item[0][1].regjioni.emri}
              reshti={item[0][1].reshti.emri}
              cmimi={item[0][1].cmimi}
              click={() => this.removeFromBasket(item[0][1].id)}
              calcTotPRice={this.calclTotalPRice}
            />
          </CSSTransition>
        );
      } else {
        return null;
      }
    });

    let displayPrinterMain = this.props.showPrintermain ? (
      <Printmain
        close={this.hidePrintcerMainHandler}
        refresh={this.refreshSitsHandler}
        ticketsData={this.state.basket}
      />
    ) : null;

    return (
      <div className={classes.region} style={this.props.style}>
        {displayPrinterMain}
        <button onClick={this.props.close} className={classes.closeButton}>
          Mbylle
        </button>
        <button
          onClick={this.showPrintcerMainHandler}
          className={classes.printButton}>
          Printo
        </button>

        <h2>Regjioni: {this.props.regionName}</h2>
        <div className={classes.sitsStyling}>
          <div>{displayRow}</div>

          <div className={classes.bottomContainer}>
            <div className={classes.basketContainer}>
              <div className={classes.basketIcon}>
                <img src={basketImg} alt="" />
              </div>
              <TransitionGroup
                component="ul"
                style={{ backgroundColor: "azure" }}>
                {displayBasket}
              </TransitionGroup>
            </div>
            <div className={classes.priceContainer}>
              <Price
                price={this.state.totalPrice}
                counter={this.state.basketCount}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    regionData: state.regionData,
    showPrintermain: state.showPrintermain,
    isAdmin: state.isAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showSits: region => {
      dispatch(showSitsHandler(region));
    },
    showPrintermainAction: () => {
      const action = {
        type: "SHOW_PRINTER"
      };

      dispatch(action);
    },
    hidePrintermainAction: () => {
      const action = {
        type: "HIDE_PRINTER"
      };

      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Region);