import axios from 'axios';

export const updateSits = (data, refresh, currentGameID) => {
  const refreshFunc = refresh;
  console.log("SHITJA: ", data)
  const shitjaInsert = data.map((item, indx)=>{
    return {
      fatura: 999,
      ndeshja: currentGameID,
      ulsa: item.id,
      cmimi: item.cmimi
    }
  });
  return dispatch => {
    dispatch(updateSitsStart());
    const token = localStorage.getItem('token');
    
    axios.put('/ulsetupdate/',data, {headers:{Authorization: "Token " + token}})
      .then(res => {
        dispatch(updateSitsSuccess({...res.data}));
        refreshFunc();
                axios.post('/inserttickets/',shitjaInsert, {headers:{Authorization: "Token " + token}})
                .then(res => {
                  dispatch(updateSitsSuccess({...res.data}));
                  refreshFunc();

                })
                .catch(err => {
                  dispatch(updateSitsFaild(err.message));
                });

        
      })
      .catch(err => {
        dispatch(updateSitsFaild(err.message));
      });
  };
};

const updateSitsSuccess = data => ({
  type: 'SUCCESS_UPDATE_SITS',
  payload: {
    ...data
  }
});

const updateSitsStart = () => ({
  type: 'START_UPDATE_SITS'
});

const updateSitsFaild = error => ({
  type: 'FAILD_UPDATE_SITS',
  payload: {
    error
  }
});