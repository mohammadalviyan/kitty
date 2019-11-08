import { combineReducers } from 'redux';
import auth from './auth';
import product from './product';
import category from './category';

const appReducer = combineReducers({
    auth,
    product,
    category
});

export default appReducer;