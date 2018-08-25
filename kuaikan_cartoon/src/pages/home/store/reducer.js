import { fromJS } from 'immutable';

const defaultState = fromJS({
  cartoonList: []
});

export default (state = defaultState, action) => {
  // switch(action.type) {
    
  //   default: return state;
  return state
  // }
}
