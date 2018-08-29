import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const setCartoonList = (result) => ({
  type: actionTypes.SET_CARTOON_LIST,
  cartoonList: fromJS(result.cartoonList)
});

const setSearchInfo = (info, list) => ({
  type: actionTypes.SET_SEARCH_INFO,
  info: fromJS(info),
  list: fromJS(list)
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
};

export const getSearchInfo = () => {
  return dispatch => {
    axios.get('/api/search.json').then(res => {
      const mainInfo = res.data.data.mainInfo;
      const allList = res.data.data.allList;
      dispatch(setSearchInfo(mainInfo, allList));
    })
  }
}