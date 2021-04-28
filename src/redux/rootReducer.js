import { combineReducers } from "redux";
import courseReducer from "./courses/courses.reducer";

const rootReducer = combineReducers({
  courses: courseReducer,
});

export default rootReducer;
