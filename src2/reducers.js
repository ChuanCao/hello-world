/**
 * Created by Administrator on 2017/3/24 0024.
 */
import { combineReducers } from 'redux';

const culculator = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state+action.text;
            break;
        case 'minus':

            return state-action.text;
            break;
        default:
            return state;
    }
};
const culculator2 = (state = 0, action) => {
    switch (action.type) {
        case '1123':
            return state+action.text;
            break;
        case '123123ff':

            return state-action.text;
            break;
        default:
            return state;
    }
};


const totalCulculator = combineReducers({
    culculator,
    culculator2
});
export default totalCulculator