import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {
  token: null,
  username: null,
  isauthenticated: false,
  isAdmin: false,
  loginMessage: "",
  showspinner: false,
  regionData: null,
  showGameSetup: false,
  showSits: false,
  showShitja: false,
  showPrintermain: false,
  currentGameID: "",
  currentGametitulli: "",
  currentGametitulli2: "",
  currentGametitulli3: "",
  currentGamendeshja: "",
  currentGamedata: null,
  currentGameora: null,

  currentGamedataGame2: null,
  currentGameoraGame2: null,
  currentGamedataGame3: null,
  currentGameoraGame3: null,
  allGames: [],
  currentGameSales: [],
  gameIsReady: false,
  llojetNdeshjet: [],
  takenSits: [],
  updateTakenSits: false,
  regionPrices: [],
  error: "",
  errorStatus: null,
  showError: false
};

const Reducer = (state = initialState, action) => {
  //     console.log('Reducer Running', action)
  switch (action.type) {
    case "SUCCESS_LOGIN":
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        isauthenticated: true,
        isAdmin: true,
        showspinner: false
      };
    case "START_LOGIN":
      return { ...state, showspinner: true };
    case "FAILD_LOGIN":
      return {
        ...state,
        showspinner: false,
        isauthenticated: false,
        loginMessage: "Emri i përdoruesit ose fjalëkalimin i gabuar!"
      };

    case "SUCCESS_CHECK":
      return {
        ...state,
        showspinner: false,
        isauthenticated: true,
        isAdmin: true
      };
    case "START_CHECK":
      return { ...state, showspinner: true };
    case "FAILD_CHECK_401":
      return {
        ...state,
        showspinner: false,
        isauthenticated: false,
        isAdmin: false,
        errorStatus: action.payload.error.response.status
      };
    case "FAILD_CHECK_403":
      return {
        ...state,
        showspinner: false,
        isauthenticated: true,
        isAdmin: false,
        errorStatus: action.payload.error.response.status
      };

    case "SUCCESS_GET_SITS":
      return { ...state, regionData: action.payload, showspinner: false };
    case "START_GET_SITS":
      return { ...state, regionData: [], showspinner: true };
    case "FAILD_GET_SITS":
      return { ...state, showspinner: false };

    case "SUCCESS_GET_PRICES":
      return { ...state, regionPrices: action.payload, showspinner: false };
    case "START_GET_PRICES":
      return { ...state, showspinner: true };
    case "FAILD_GET_PRICES":
      return { ...state, showspinner: false };

    case "SUCCESS_UPDATE_PRICE":
      return { ...state, showspinner: false };
    case "START_UPDATE_PRICE":
      return { ...state, showspinner: true };
    case "FAILD_UPDATE_PRICE":
      return {
        ...state,
        showspinner: false,
        error: action.payload.error,
        showError: true
      };

    case "SUCCESS_UPDATE_SITS":
      return { ...state, showspinner: false, showPrintermain: false };
    case "START_UPDATE_SITS":
      return { ...state, showspinner: true };
    case "FAILD_UPDATE_SITS":
      return { ...state, showspinner: false };
    case "SHOW_PRINTER":
      return { ...state, showPrintermain: true };
    case "HIDE_PRINTER":
      return { ...state, showPrintermain: false };

    case "SHOW_SITS":
      return { ...state, showSits: true };

    case "HIDE_SITS":
      return { ...state, showSits: false };

    case "SHOW_SHITJA":
      return { ...state, showShitja: true };

    case "HIDE_SHITJA":
      return { ...state, showShitja: false };

    case "SHOW_SETUP_GAME":
      return { ...state, showGameSetup: true };

    case "HIDE_SETUP_GAME":
      return { ...state, showGameSetup: false, regionPrices: [] };

    case "SUCCESS_GET_GAME":
      return {
        ...state,
        showspinner: false,
        gameIsReady: true,
        currentGameID: action.payload.id,
        currentGametitulli: action.payload.titulli,
        currentGametitulli2: action.payload.gametitle2,
        currentGametitulli3: action.payload.gametitle3,
        currentGamendeshja: action.payload.ndeshja,
        currentGamedata: action.payload.data,
        currentGameora: action.payload.ora,

        currentGamedataGame2: action.payload.data2,
        currentGameoraGame2: action.payload.ora2,
        currentGamedataGame3: action.payload.data3,
        currentGameoraGame3: action.payload.ora3,

        llojetNdeshjet: action.payload.llojetNdeshjet
      };

    case "START_SAVE_GAME":
      return { ...state, showspinner: true };

    case "FAILD_SAVE_GAME":
      return { ...state, showspinner: false };

    case "SUCCESS_SAVE_GAME":
      return {
        ...state,
        showspinner: false,
        gameIsReady: true,
        currentGameID: action.payload.id,
        currentGametitulli: action.payload.titulli,
        currentGamendeshja: action.payload.ndeshja,
        currentGamedata: action.payload.data,
        currentGameora: action.payload.ora
      };

    case "START_ALL_GAMES":
      return { ...state, showspinner: true };

    case "FAILD_ALL_GAMES":
      return { ...state, showspinner: false };

    case "SUCCESS_ALL_GAMES":
      // console.log(action.payload)
      return {
        ...state,
        showspinner: false,
        allGames: action.payload.allGames,
        currentGameSales: action.payload.shitjaJson
      };

    // case 'START_SHITJA_SELECTED':
    //         return {...state, showspinner: true}

    // case 'FAILD_SHITJA_SELECTED':
    //         return {...state, showspinner: false}

    // case 'SUCCESS_SHITJA_SELECTED':
    //         return {...state, showspinner: false, allGames: action.payload}

    case "SUCCESS_NEW_GAME":
      return {
        ...state,
        showspinner: false,
        currentGametitulli: "",
        currentGamendeshja: "",
        currentGamedata: "",
        currentGameora: ""
      };

    case "FAILD_NEW_GAME":
      return { ...state, showspinner: false };

    case "START_NEW_GAME":
      return { ...state, showspinner: true };

    case "SUCCESS_TAKENSITS":
      return {
        ...state,
        showspinner: false,
        updateTakenSits: false,
        takenSits: action.payload
      };

    case "FAILD_TAKENSITS":
      return { ...state, showspinner: false };

    case "START_TAKENSITS":
      return { ...state, showspinner: true };

    case "REFRESH_TAKENSITS":
      return { ...state, updateTakenSits: true };

    case "START_GET_GAME":
      return { ...state, showspinner: true };

    case "FAILD_GET_GAME":
      return { ...state, showspinner: false };

    case "CURRENT_GAME_ONCHANGE":
      return {
        ...state,
        [action.payload.target.id]: action.payload.target.value
      };

    case "FAILD_GET_NDESHJET_GAME":
      return { ...state, showspinner: false };

    default:
      return initialState;
  }
};

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, {}, composeEnhances(applyMiddleware(thunk)));

export default store;
