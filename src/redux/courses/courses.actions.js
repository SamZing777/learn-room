import {
  fetch_course,
  gotten_course_data,
  set_course_categories,
  set_course_category_data,
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

export const setCourseCategoryData = (data) => {
  return {
    type: set_course_category_data,
    payload: data,
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

export const getCoursesForCategory = (category_id) => {
  return async (dispatch) => {
    const fetch_category_data = await axios.get(
      `http://learnroom.herokuapp.com/course/courses/?category=${category_id}`
    );
    const { data, status, statusText } = fetch_category_data;
    if (status === 200 && statusText === "OK") {
      const { results } = data;
      dispatch(setCourseCategoryData(results));
    }
  };
};
