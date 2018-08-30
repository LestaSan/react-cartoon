import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const searchFollowed = (list) => ({
  type: actionTypes.CANCLE_FOLLOWED,
  list: fromJS(list),
});


export const setFollowCartoon = (list, id) => ({
  type: actionTypes.SET_FOLLOW_CARTOON,
  list: fromJS(list),
  id
});

export const cancleFollowed = (id, list) => {
  return dispatch => {
    const arr = [];
    for (let i = 0; i < list.length;  i++) {
      if (list[i].id !== id) {
        arr.push(list[i]);
      }
    }
    dispatch(searchFollowed(arr));
  }
};