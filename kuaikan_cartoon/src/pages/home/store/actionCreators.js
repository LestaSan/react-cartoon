import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const setCartoonList = (result) => ({
  type: actionTypes.SET_CARTOON_LIST,
  cartoonList: fromJS(result.cartoonList)
})

export const getCartoonList = () => {
  return dispatch => {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data.data;
        const action = setCartoonList(result);
        dispatch(action);
      })
  }
}