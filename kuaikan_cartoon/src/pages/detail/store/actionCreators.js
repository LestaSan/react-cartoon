import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const setFollowCartoon = (list) => ({
  type: actionTypes.SET_FOLLOW_CARTOON,
  list: fromJS(list)
});