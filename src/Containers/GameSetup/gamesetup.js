import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./gemesetup.module.css";
import {
  getCurrentGame,
  changeActionHandler,
  saveNewGameActionHandler,
  newGameActionHandler,
  getPricesActionHandler,
  updatePriceActionHandler
} from "../../Actions/gamesetupactions";
import { Redirect } from "react-router-dom";
import Selector from "../../components/Selector/selector";
import Editbox from "../../components/EditBox/editbox";
import Label from "../../components/Label/label";
import Button from "../../components/Button/button";
import Gray from "../../components/Graybackground/graybackground";
import RegjionPrices from "../../components/RegjionPrice/regjionprice";

class Gamesetup extends Component {
  state = {
    showsetup: true,
    titulli: "",
    ndeshja: "",
    koha: "",
    addNewGame: false,
    date: new Date(),
    showFinal8: false
  };

  closeGameSetup = e => {
    this.setState({
      showsetup: false
    });
  };

  componentDidMount() {
    this.props.getPricesDispatch();
    this.props.getGameHandler();
  }

  handleChange = e => {
    console.log("aaaaaaaaaaaaaaaa", e.target.id, e.target.value);
    if (e.target.id === "currentGamendeshja" && e.target.value === "4") {
      this.setState({
        showFinal8: true
      });
    } else {
      this.setState({
        showFinal8: false
      });
    }
    this.props.changeHandlerAction(e);
  };
  datatimechange = e => {
    const changedataTimeAction = this.props.changedataTimeHandlerAction;
    changedataTimeAction(e);
  };

  handleSaveGame = () => {
    const data = {
      titulli: this.props.currentGametitulli,
      ndeshja: this.props.currentGamendeshja,
      data: this.props.currentGamedata,
      ora: this.props.currentGameora
    };
    if (this.props.currentGamendeshja === "4") {
      localStorage.setItem("game2Data", this.props.currentGamedataGame2);
      localStorage.setItem("game2Ora", this.props.currentGameoraGame2);

      localStorage.setItem("game3Data", this.props.currentGamedataGame3);
      localStorage.setItem("game3Ora", this.props.currentGameoraGame3);

      localStorage.setItem("game2title", this.props.currentGametitulli2);
      localStorage.setItem("game3title", this.props.currentGametitulli3);
    }
    this.props.saveNewGameDispatch(data);
  };

  handleNewGame = () => {
    this.props.newGameDispatch();
  };

  render() {
    const rgnPrices =
      this.props.regionPrices.length > 0
        ? this.props.regionPrices.map((item, indx) => {
            return (
              <tr key={indx}>
                <RegjionPrices
                  key={indx}
                  click={this.props.updatePriceDispatch}
                  rgnPrice={item.cmimi}
                  rgnId={item.regjioni}
                  title={item.regjioni__emri}
                />
              </tr>
            );
          })
        : null;

    const redirectCom = this.props.showGameSetup ? (
      <Redirect to="/main/setup" />
    ) : (
      <Redirect to="/main" />
    );
    let gameTitle = "Loading!";
    let gameTitle2 = "Loading!";
    let gameTitle3 = "Loading!";
    let ndeshja = "Loading!";
    let data = "";
    let ora = "";
    let data2 = "";
    let ora2 = "";
    let data3 = "";
    let ora3 = "";

    if (this.props.gameIsReady) {
      gameTitle = this.props.currentGametitulli;
      gameTitle2 = this.props.currentGametitulli2;
      gameTitle3 = this.props.currentGametitulli3;
      ndeshja = this.props.currentGamendeshja;
      data = this.props.currentGamedata;
      ora = this.props.currentGameora;
      data2 = this.props.currentGamedataGame2;
      ora2 = this.props.currentGameoraGame2;
      data3 = this.props.currentGamedataGame3;
      ora3 = this.props.currentGameoraGame3;
    }
    console.log(
      "CURENT GAME NDESHJA: ",
      this.props.currentGamendeshja,
      this.state.showFinal8
    );
    const gameVS =
      this.props.currentGamendeshja === "4" ||
      this.state.showFinal8 === true ? (
        <React.Fragment>
          <tr>
            <td>
              <Label titulli="Ndeshaja 1:" />
            </td>
            <td>
              <Editbox
                inputID="currentGametitulli"
                change={this.handleChange}
                val={gameTitle}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label titulli="Ndeshaja 2:" />
            </td>
            <td>
              <Editbox
                inputID="currentGametitulli2"
                change={this.handleChange}
                val={gameTitle2}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label titulli="Ndeshaja 3:" />
            </td>
            <td>
              <Editbox
                inputID="currentGametitulli3"
                change={this.handleChange}
                val={gameTitle3}
              />
            </td>
          </tr>
        </React.Fragment>
      ) : (
        <tr>
          <td>
            <Label titulli="Titulli:" />
          </td>
          <td>
            <Editbox
              inputID="currentGametitulli"
              change={this.handleChange}
              val={gameTitle}
            />
          </td>
        </tr>
      );
    const timeAndDate =
      this.props.currentGamendeshja === "4" ||
      this.state.showFinal8 === true ? (
        <React.Fragment>
          <tr>
            <td>
              <Label titulli="Ndeshja 1: " />
            </td>
            <td>
              <input
                id="currentGamedata"
                type="date"
                onChange={this.handleChange}
                value={data}
              />
              <input
                id="currentGameora"
                type="time"
                onChange={this.handleChange}
                value={ora}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label titulli="Ndeshja 2: " />
            </td>
            <td>
              <input
                id="currentGamedataGame2"
                type="date"
                onChange={this.handleChange}
                value={data2}
              />
              <input
                id="currentGameoraGame2"
                type="time"
                onChange={this.handleChange}
                value={ora2}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label titulli="Ndeshja 3: " />
            </td>
            <td>
              <input
                id="currentGamedataGame3"
                type="date"
                onChange={this.handleChange}
                value={data3}
              />
              <input
                id="currentGameoraGame3"
                type="time"
                onChange={this.handleChange}
                value={ora3}
              />
            </td>
          </tr>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <tr>
            <td>
              <Label titulli="Koha: " />
            </td>
            <td>
              <input
                id="currentGamedata"
                type="date"
                onChange={this.handleChange}
                value={data}
              />
              <input
                id="currentGameora"
                type="time"
                onChange={this.handleChange}
                value={ora}
              />
            </td>
          </tr>
        </React.Fragment>
      );
    return (
      <React.Fragment>
        <Gray />
        <div className={classes.region}>
          {redirectCom}
          <button
            onClick={this.props.hideGameSetupHandler}
            className={classes.closeButton}>
            Mbylle
          </button>

          <h2>Regullimet: {this.props.title}</h2>
          <div className={classes.sitsStyling}>
            <table cellPadding="10">
              <tbody>
                {/* <tr>
                  <td>
                    <Label titulli="Titulli:" />
                  </td>
                  <td>
                    <Editbox
                      inputID="currentGametitulli"
                      change={this.handleChange}
                      val={gameTitle}
                    />
                  </td>
                </tr> */}
                {gameVS}
                <tr>
                  <td>
                    <Label titulli="Ndeshja: " />
                  </td>
                  <td>
                    <Selector
                      inputID="currentGamendeshja"
                      list={this.props.llojetEndeshjeve}
                      change={this.handleChange}
                      selectedItem={ndeshja}
                    />
                  </td>
                </tr>
                {/* <tr>
                  <td>
                    <Label titulli="Koha: " />
                  </td>
                  <td>
                    <input
                      id="currentGamedata"
                      type="date"
                      onChange={this.handleChange}
                      value={data}
                    />
                    <input
                      id="currentGameora"
                      type="time"
                      onChange={this.handleChange}
                      value={ora}
                    />
                  </td>
                </tr> */}
                {timeAndDate}
                <tr>
                  <td></td>
                  <td>
                    <Button
                      btntype="green"
                      click={this.handleSaveGame}
                      title="Ruaje"
                    />
                    <Button
                      btntype="red"
                      click={this.handleNewGame}
                      title="Shto ndeshje"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            Regullimi i cmimeve:
            <div className={classes.table2}>
              <table>
                <tbody>
                  {/* UPDATE PRICES */}
                  {rgnPrices}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    showGameSetup: state.showGameSetup,
    gameIsReady: state.gameIsReady,
    currentGametitulli: state.currentGametitulli,
    currentGametitulli2: state.currentGametitulli2,
    currentGametitulli3: state.currentGametitulli3,
    currentGamendeshja: state.currentGamendeshja,
    currentGamedata: state.currentGamedata,
    currentGameora: state.currentGameora,
    currentGamedataGame2: state.currentGamedataGame2,
    currentGameoraGame2: state.currentGameoraGame2,
    currentGamedataGame3: state.currentGamedataGame3,
    currentGameoraGame3: state.currentGameoraGame3,
    llojetEndeshjeve: state.llojetNdeshjet,
    regionPrices: state.regionPrices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideGameSetupHandler: () => {
      const action = {
        type: "HIDE_SETUP_GAME"
      };

      dispatch(action);
    },

    getGameHandler: () => {
      dispatch(getCurrentGame());
    },

    changeHandlerAction: e => {
      dispatch(changeActionHandler(e));
    },

    saveNewGameDispatch: data => {
      dispatch(saveNewGameActionHandler(data));
    },

    newGameDispatch: () => {
      dispatch(newGameActionHandler());
    },

    getPricesDispatch: () => {
      dispatch(getPricesActionHandler());
    },

    updatePriceDispatch: data => {
      dispatch(updatePriceActionHandler(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Gamesetup);
