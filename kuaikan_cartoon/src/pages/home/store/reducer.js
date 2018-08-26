import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  cartoonList: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_CARTOON_LIST:
      return state.set('cartoonList', action.cartoonList);
    default: return state;
  }
}
