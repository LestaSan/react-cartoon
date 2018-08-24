import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    MouseOver: false
})
export default (state = defaultState, action) => {
    if(action.type === actionTypes.FOLLOW_INFO_SHOW) {
        return state.set('MouseOver', true)
    }
    if(action.type === actionTypes.FOLLOW_INFO_HIDE) {
        return state.set('MouseOver', false)
    }
    return state;
}
