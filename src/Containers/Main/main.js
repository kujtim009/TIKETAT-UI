import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/Header/header";
import Spinner from "../../components/Spinner/spinner";
import MainGreed from "../../components/MainGrid/maingrid";
import { checkAuthenticityAction } from "../../Actions/loginActions";
import { getCurrentGame } from "../../Actions/gamesetupactions";

class Main extends Component {
  componentDidMount() {
    this.props.getGameHandler();
  }

  componentWillMount() {}
  render() {
    let redirectCom = null;

    if (
      this.props.isauthenticated === false &&
      localStorage.getItem("token") === null
    ) {
      redirectCom = <Redirect to="/" />;
    }

    const username = localStorage.getItem("username");
    const spinner = this.props.showspinner ? (
      <Spinner showspinner={this.props.showspinner} />
    ) : null;
    return (
      <React.Fragment>
        {redirectCom}
        {spinner}
        <div>
          <Header
            showsetup={this.props.showSetupGameHandler}
            showsits={this.props.showSitsHandler}
            showshitja={this.props.showShitjaHandler}
            username={username}
            isadmin={this.props.isadmin}
          />
        </div>
        <div>
          <MainGreed />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    username: state.username,
    isauthenticated: state.isauthenticated,
    isAdmin: state.isAdmin,
    showspinner: state.showspinner,
    showGameSetup: state.showGameSetup,
    showSits: state.showSits,
    showShitja: state.showShitja
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showSetupGameHandler: () => {
      const action = {
        type: "SHOW_SETUP_GAME"
      };

      dispatch(action);
    },
    showSitsHandler: () => {
      const action = {
        type: "SHOW_SITS"
      };

      dispatch(action);
    },
    showShitjaHandler: () => {
      const action = {
        type: "SHOW_SHITJA"
      };

      dispatch(action);
    },
    checkAuthenticityHandler: () => {
      dispatch(checkAuthenticityAction());
    },
    getGameHandler: () => {
      dispatch(getCurrentGame());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
