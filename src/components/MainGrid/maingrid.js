import React, { Component } from "react";
import classes from "../../components/MainGrid/maingrid.module.css";
import bgSalla from "../../images/salla_bg.png";
import Region from "../../Containers/Regions/region";
import { Motion, spring } from "react-motion";
import Graybackground from "../Graybackground/graybackground";
class Maingrid extends Component {
  state = {
    showRegion: false,
    startAnimation: false,
    regionId: null,
    regjions: [
      { title: "L111", cords: "192,26,406,113" },
      { title: "L110", cords: "409,31,650,111" },
      { title: "L109", cords: "652,37,884,113" },
      { title: "P101", cords: "177,448,395,623" },
      { title: "P102", cords: "397,450,639,624" },
      { title: "P103", cords: "642,450,872,624" },
      { title: "V112", cords: "98,139,151,321" },
      { title: "V113", cords: "98,324,153,522" },
      { title: "J108", cords: "919,43,1034,141" },
      { title: "J105", cords: "907,144,947,326" },
      { title: "J107", cords: "998,143,1035,310" },
      { title: "J104", cords: "906,325,943,523" },
      { title: "J106", cords: "995,312,1036,480" },
      { title: "VIP1", cords: "195,123,860,153" },
      { title: "VIP2", cords: "852,184,226,159" },
      { title: "VIP3", cords: "785,194,844,426" },
      { title: "VIP4", cords: "196,197,281,424" },
      { title: "KMB", cords: "340,201,734,414" }
    ],
    canvas: [
      { regionId: "L111", rowID: "A", sitId: null, cords: "192,26,406,113" },
      { regionId: "L111", rowID: "A", sitId: null, cords: "409,31,650,111" }
    ]
  };

  regjionClickHandler = event => {
    event.preventDefault();
    this.setState({
      showRegion: true,
      startAnimation: true,
      regionId: event.target.title
    });
  };

  closeRegion = event => {
    event.preventDefault();

    const waitForAnimation = new Promise((resolve, reject) => {
      this.setState({
        startAnimation: false
      });

      setTimeout(() => {
        resolve();
      }, 500);
    });

    waitForAnimation.then(() => {
      this.setState({
        showRegion: false
      });
    });
  };

  render() {
    const areas = this.state.regjions.map((myItem, indx) => {
      return (
        <area
          key={indx}
          target=""
          alt={myItem.title}
          title={myItem.title}
          href="#"
          onClick={this.regjionClickHandler}
          coords={myItem.cords}
          shape="rect"></area>
      );
    });

    const showRegion = this.state.showRegion ? (
      <Motion
        defaultStyle={{ y: -400, opacity: 0 }}
        style={{
          y: spring(
            this.state.startAnimation ? 0 : -400,
            spring(this.state.startAnimation ? 1 : 0, {
              stiffness: 170,
              damping: 12
            })
          ),
          opacity: spring(this.state.startAnimation ? 1 : 0)
        }}>
        {style => (
          <Region
            style={{
              transform: `translateY(${style.y}px)`,
              opacity: style.opacity
            }}
            regionName={this.state.regionId}
            close={this.closeRegion}
          />
        )}
      </Motion>
    ) : null;
    const showGrayBackground = this.state.showRegion ? (
      <Graybackground />
    ) : null;

    return (
      <React.Fragment>
        <div className={classes.mainDiv}>
          <img
            name="allRegions"
            src={bgSalla}
            useMap="#image-map"
            alt="Regjionet"
          />

          <map name="image-map">{areas}</map>
        </div>
        {showGrayBackground}
        {showRegion}
      </React.Fragment>
    );
  }
}

export default Maingrid;
