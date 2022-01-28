import userReducer from "./user/userReducer";
import courseReducer from "./course/courseReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer,
  courseReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

