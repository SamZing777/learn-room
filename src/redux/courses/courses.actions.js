import { fetch_course } from "./courses.types";
import axios from "axios";

export const getCourse = () => {
  return async (dispatch) => {
    dispatch({ type: fetch_course, payload: null });
    const courses = await axios.get(
      "http://learnroom.herokuapp.com/course/courses"
    );
    console.log(courses);
  };
};
