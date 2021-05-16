import { combineReducers } from "redux";
import courseReducer from "./courses/courses.reducer";
import jobsReducer from "./jobs/jobs.reducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  jobs: jobsReducer,
});

export default rootReducer;
