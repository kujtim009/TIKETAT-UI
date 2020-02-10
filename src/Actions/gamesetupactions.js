import axios from "axios";

export const getCurrentGame = () => {
  return dispatch => {
    dispatch(getGameStart());
    const token = localStorage.getItem("token");
    axios
      .get("/ndeshjetcurrent", { headers: { Authorization: "Token " + token } })
      .then(res => {
        axios
          .get("/llojiindeshjeve", {
            headers: { Authorization: "Token " + token }
          })
          .then(ndeshjetRes => {
            localStorage.setItem("currentGameID", res.data.id);
            dispatch(
              getGameSuccess({
                ...res.data,
                llojetNdeshjet: ndeshjetRes.data,
                data2: localStorage.getItem("game2Data"),
                ora2: localStorage.getItem("game2Ora"),
                data3: localStorage.getItem("game3Data"),
                ora3: localStorage.getItem("game3Ora"),
                gametitle2: localStorage.getItem("game2title"),
                gametitle3: localStorage.getItem("game3title")
              })
            );
          })
          .catch(err => {
            dispatch(llojiindeshjeveFailed(err.message));
          });
        // dispatch(getGameSuccess({...res.data}));
      })
      .catch(err => {
        dispatch(getGameFaild(err.message));
      });
  };
};

const getGameSuccess = data => ({
  type: "SUCCESS_GET_GAME",
  payload: data
});

const getGameStart = () => ({
  type: "START_GET_GAME"
});

const getGameFaild = error => ({
  type: "FAILD_GET_GAME",
  payload: {
    error
  }
});

const llojiindeshjeveFailed = error => ({
  type: "FAILD_GET_NDESHJET_GAME",
  payload: {
    error
  }
});

export const saveNewGameActionHandler = data => {
  return dispatch => {
    dispatch(saveGameStart());
    const token = localStorage.getItem("token");
    axios
      .post("/ndeshjet/", data, {
        headers: { Authorization: "Token " + token }
      })
      .then(res => {
        localStorage.setItem("currentGameID", res.data.id);
        localStorage.setItem("ticketCounter", 0);
        dispatch(saveGameSuccess({ ...res.data }));
      })
      .catch(err => {
        dispatch(saveGameFaild(err.message));
      });
  };
};

const saveGameSuccess = data => ({
  type: "SUCCESS_SAVE_GAME",
  payload: data
});

const saveGameStart = () => ({
  type: "START_SAVE_GAME"
});

const saveGameFaild = error => ({
  type: "FAILD_SAVE_GAME",
  payload: {
    error
  }
});

export const changeActionHandler = e => {
  return dispatch => {
    dispatch({
      type: "CURRENT_GAME_ONCHANGE",
      payload: e
    });
  };
};

export const changedataTimeActionHandlerdata = e => {
  return dispatch => {
    dispatch({
      type: "CURRENT_GAME_DATETIMECHANGE_DATA",
      payload: e
    });
  };
};

export const changedataTimeActionHandlerora = e => {
  return dispatch => {
    dispatch({
      type: "CURRENT_GAME_DATETIMECHANGE_ORA",
      payload: e
    });
  };
};

export const newGameActionHandler = () => {
  return dispatch => {
    dispatch(newGameStart());
    const token = localStorage.getItem("token");
    axios
      .get("/ulsetupdateall/", { headers: { Authorization: "Token " + token } })
      .then(res => {
        dispatch(newGameSuccess());
      })
      .catch(err => {
        dispatch(newGameFaild(err.message));
      });
  };
};

const newGameSuccess = () => ({
  type: "SUCCESS_NEW_GAME"
});

const newGameStart = () => ({
  type: "START_NEW_GAME"
});

const newGameFaild = error => ({
  type: "FAILD_NEW_GAME",
  payload: {
    error
  }
});

// GET PRICES FOR REGIONS
export const getPricesActionHandler = () => {
  return dispatch => {
    dispatch(getPricesStart());
    const token = localStorage.getItem("token");
    axios
      .get("/cmimetgroup", { headers: { Authorization: "Token " + token } })
      .then(res => {
        dispatch(getPricesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getPricesFaild(err.message));
      });
  };
};

const getPricesSuccess = data => ({
  type: "SUCCESS_GET_PRICES",
  payload: data
});

const getPricesStart = () => ({
  type: "START_GET_PRICES"
});

const getPricesFaild = error => ({
  type: "FAILD_GET_PRICES",
  payload: {
    error
  }
});

// GET PRICES FOR REGIONS
export const updatePriceActionHandler = data => {
  return dispatch => {
    dispatch(updatePriceStart());
    const token = localStorage.getItem("token");
    axios
      .post("/cmimetgroup/", data, {
        headers: { Authorization: "Token " + token }
      })
      .then(res => {
        dispatch(updatePriceSuccess(res.data));
      })
      .catch(err => {
        dispatch(updatePriceFaild(err.message));
      });
  };
};

const updatePriceSuccess = data => ({
  type: "SUCCESS_UPDATE_PRICE",
  payload: data
});

const updatePriceStart = () => ({
  type: "START_UPDATE_PRICE"
});

const updatePriceFaild = error => ({
  type: "FAILD_UPDATE_PRICE",
  payload: {
    error
  }
});
