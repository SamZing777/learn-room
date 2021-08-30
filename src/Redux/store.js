import userReducer from "./user/userReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

