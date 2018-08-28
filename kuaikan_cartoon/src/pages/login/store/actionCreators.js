import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeLoginState = (isLogin) => ({
  type: actionTypes.CHANGE_LOGIN_STATE,
  isLogin
}) 

export const getLoginState = () => {
  return dispatch => {
    axios.get('/api/login.json').then(res => {
      const result = res.data.data;
      dispatch(changeLoginState(result))
    })
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  isLogin: false
})