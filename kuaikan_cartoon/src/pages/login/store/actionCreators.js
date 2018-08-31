import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeLoginState = (isLogin, account) => ({
  type: actionTypes.CHANGE_LOGIN_STATE,
  isLogin,
  account
});

export const getLoginState = (account) => {
  return dispatch => {
    axios.get('/api/login.json').then(res => {
      const result = res.data.data;
      dispatch(changeLoginState(result, account))
    }).catch(err => (
      console.log('请求登录状态出错')
    ))
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  isLogin: false
});