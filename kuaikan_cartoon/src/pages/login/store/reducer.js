import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  isLogin: false,
  account: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN_STATE:
      return state.merge({
        isLogin: action.isLogin.isLogin,
        account: action.account,
      })
    case actionTypes.LOGOUT:
      return state.set('isLogin', action.isLogin)
    default: return state;
  }
}
