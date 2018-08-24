import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  MouseOver: false,
  IsMouseEnter: false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW_INFO_SHOW:
      return state.set('MouseOver', true);
    case actionTypes.FOLLOW_INFO_HIDE:
      return state.set('MouseOver', false);
    case actionTypes.MOUSE_ENTER:
      return state.set('IsMouseEnter', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('IsMouseEnter', false)
    default: return state;
    }

  
}
