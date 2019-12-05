import axios from 'axios';

export const getTakenSitsActionHandler = () => {
  return dispatch => {
    dispatch(takenSitsStarted());
    
    // console.log("DATA FOR AXIOS: ".data)
    const token = localStorage.getItem('token');
    axios.get('/ulsetezena', {headers:{Authorization: "Token " + token}})
      .then(res => {
        dispatch(takenSitsSuccess({...res.data}));
      })
      .catch(err => {
        dispatch(takenSitsFailure(err.message));
      });
  };
};

const takenSitsSuccess = data => ({
  type: 'SUCCESS_TAKENSITS',
  payload: {
    ...data
  }
});

const takenSitsStarted = () => ({
  type: 'START_TAKENSITS'
});

const takenSitsFailure = error => ({
  type: 'FAILD_TAKENSITS',
  payload: {
    error
  }
});