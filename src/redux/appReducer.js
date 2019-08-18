import { combineReducers } from 'redux';
import { managerReducer } from './manager/reducer';

const AppActions = 'CHANGE_DISPLAY';

const displayReducer = (state = {}, action) => {
    ;
    switch (action.type) {
        case 'CHANGE_DISPLAY': {
            return { display: action.display }
        }
        default:
            return state;
    }
}


export const appReducer = combineReducers({
    manager: managerReducer,
    display: displayReducer
});