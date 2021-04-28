import { fetch_course } from "./courses.types";

const initState = {
  courses: [],
  getting_courses: false,
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case fetch_course:
      break;
    default:
      break;
  }
  return state;
};

export default courseReducer;
