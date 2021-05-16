import {
  fetch_course,
  gotten_course_data,
  set_course_categories,
  set_course_category_data,
} from "./courses.types";

const initState = {
  courses: [],
  getting_courses: false,
  course_categories: [],
  category_data: [],
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case fetch_course:
      break;
    case gotten_course_data:
      state = { ...state, courses: action.payload };
      break;
    case set_course_categories:
      state = { ...state, course_categories: action.payload };
      break;
    case set_course_category_data:
      state = { ...state, category_data: action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default courseReducer;
