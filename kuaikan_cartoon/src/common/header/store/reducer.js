import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  MouseOver: false,
  IsMouseEnter: false,
  MouseOverUser: false,
  IsMouseEnterUser: false,
  cartoonList: [
    {id: 1},
    { id: 2}
  ]
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
      return state.set('IsMouseEnter', false);
    case actionTypes.USER_FOLLOWED_SHOW:
      return state.set('MouseOverUser', true);
    case actionTypes.USER_FOLLOWED_HIDE:
      return state.set('MouseOverUser', false);
    case actionTypes.MOUSE_ENTER_USER:
      return state.set('IsMouseEnterUser', true);
    case actionTypes.MOUSE_LEAVE_USER:
      return state.set('IsMouseEnterUser', false)
    default: return state;
    }

  
}
