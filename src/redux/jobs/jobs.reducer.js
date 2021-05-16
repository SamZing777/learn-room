import { SET_JOBS } from "./jobs.types";

const initState = {
  jobs: [],
};

const jobsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_JOBS:
      state = { ...state, jobs: action.payload };
      break;
    default:
      break;
  }

  return state;
};

export default jobsReducer;
