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
});

const setResultList = (list, value) => ({
  type: actionTypes.SET_RESULT_LIST,
  list: fromJS(list),
  value,
  isShowed: true
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
};

export const compareId = (list, infoList, value) => {
  return dispatch => {
    const resultList = []; 
    for(let i = 0; i < infoList.length; i++) {
      if(list.indexOf(infoList[i].id) >= 0) {
        resultList.push(infoList[i])
      }
    }
    dispatch(setResultList(resultList, value))
  }
};

export const handleClosed = () => ({
  type: actionTypes.CLOSED,
  isShowed: false
})