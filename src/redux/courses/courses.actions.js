import {
  fetch_course,
  gotten_course_data,
  set_course_categories,
} from "./courses.types";
import axios from "axios";

export const setCourse = (courses) => {
  return {
    type: gotten_course_data,
    payload: courses,
  };
};

export const setCategories = (categories) => {
  return {
    type: set_course_categories,
    payload: categories,
  };
};

export const getCourse = () => {
  return async (dispatch) => {
    dispatch({ type: fetch_course, payload: null });
    const fetch_courses = await axios.get(
      "http://learnroom.herokuapp.com/course/courses"
    );
    const { data, status, statusText } = fetch_courses;
    if (status === 200 && statusText === "OK") {
      const { results } = data;
      dispatch(setCourse(results));
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const fetch_categories = await axios.get(
      "http://learnroom.herokuapp.com/course/categories/"
    );
    const { data, status, statusText } = fetch_categories;
    console.log(data);
    if (status === 200 && statusText === "OK") {
      const { results } = data;
      dispatch(setCategories(results));
    }
  };
};
