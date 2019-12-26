import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "../Header/header.module.css";

class Header extends Component {
  state = {
    redirect: false
  };

  clearStorage = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    document.location.href = "/";
  };

  render() {
    const showAdminLinks = this.props.isadmin ? (
      <React.Fragment>
        <li>
          <Link to="/main/shitja" onClick={this.props.showshitja}>
            Shitja
          </Link>
        </li>
        <li>
          <Link to="/main/setup" onClick={this.props.showsetup}>
            Regullimet
          </Link>
        </li>
      </React.Fragment>
    ) : null;

    return (
      <div>
        <ul>
          <li>
            <Link to="/main/sits" onClick={this.props.showsits}>
              Ulset
            </Link>
          </li>
          {/* <li><a href="/#" onClick={this.props.showsits}>Ulset</a></li> */}
          {showAdminLinks}
          <li style={{ float: "right" }}>
            <Link to="#" className={classes.active} onClick={this.clearStorage}>
              Log out
            </Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="#">Hello {this.props.username}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
