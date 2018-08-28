import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN_STATE:
      return state.set('isLogin', action.isLogin);
    case actionTypes.LOGOUT:
      return state.set('isLogin', action.isLogin)
    default: return state;
  }
}
