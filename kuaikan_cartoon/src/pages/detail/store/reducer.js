import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  followItem: [],
  isFollowed: false,
  id: ''
});


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_FOLLOW_CARTOON:
      return state.merge({
        followItem: state.get('followItem').push(action.list),
        isFollowed: action.isFollowed,
        id: action.id
      });
      case actionTypes.CANCLE_FOLLOWED:
        return state.merge({
          isFollowed: action.isFollowed,
          followItem: action.list
        })
    default: return state;
  }
}