import axios from 'axios';

export const addToBasket = (region, row, sit) => {
  return dispatch => {
    dispatch(getSitsStart());
    const token = localStorage.getItem('Token');
    
    axios.get('/ulsetregjion?regjion='+ region,{headers:{Authorization: "Token " + token}})
      .then(res => {
        dispatch(getSitsSuccess({...res.data}));
      })
      .catch(err => {
        dispatch(getSitsFaild(err.message));
      });
  };
};

const getSitsSuccess = data => ({
  type: 'SUCCESS_GET_SITS',
  payload: {
    ...data
  }
});

const getSitsStart = () => ({
  type: 'START_GET_SITS'
});

const getSitsFaild = error => ({
  type: 'FAILD_GET_SITS',
  payload: {
    error
  }
});