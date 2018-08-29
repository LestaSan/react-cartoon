import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  followItem: []
});


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_FOLLOW_CARTOON:
      return state.get('followItem').concat(action.list)
    default: return state;
  }
}