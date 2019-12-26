import axios from "axios";

export const getAllGamesActionHandler = currentGame => {
  return dispatch => {
    dispatch(getAllGamesStart());
    const token = localStorage.getItem("token");
    axios
      .get("/ndeshjet/", {
        headers: {
          Authorization: "Token " + token
        }
      })
      .then(res => {
        // console.log("LOJA E MOMENTIT", currentGame)

        axios
          .get("/shitjet?ndeshja=" + currentGame, {
            headers: {
              Authorization: "Token " + token
            }
          })
          .then(shitjaJson => {
            // console.log("SHITJA JSON: ", shitjaJson)
            // dispatch(getAllGamesSuccess(res.data));
            dispatch(getAllGamesSuccess(res.data, shitjaJson));
          });
      })
      .catch(err => {
        dispatch(getAllGamesFaild(err.message));
      });
  };
};

const getAllGamesSuccess = (data, shitjaJson) => ({
  type: "SUCCESS_ALL_GAMES",
  payload: {
    allGames: data,
    shitjaJson: shitjaJson.data
  }
});

const getAllGamesStart = () => ({
  type: "START_ALL_GAMES"
});

const getAllGamesFaild = error => ({
  type: "FAILD_ALL_GAMES",
  payload: {
    error
  }
});
