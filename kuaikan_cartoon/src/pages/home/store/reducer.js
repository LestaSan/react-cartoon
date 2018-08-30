import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  cartoonList: [],
  mainInfo: [],
  allList: [],
  resultList: [],
  inputValue: '',
  isShowed: true
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_CARTOON_LIST:
      return state.set('cartoonList', action.cartoonList);
    case actionTypes.SET_SEARCH_INFO:
      return state.merge({
        mainInfo: action.info,
        allList: action.list
      });
    case actionTypes.SET_RESULT_LIST:
      return state.merge({
        resultList: action.list,
        inputValue: action.value,
        isShowed: action.isShowed
      });
    case actionTypes.CLOSED:
      return state.set('isShowed', action.isShowed)
    default: return state;
  }
};

