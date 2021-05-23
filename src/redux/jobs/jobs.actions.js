import axios from "axios";
import { SET_JOBS } from "./jobs.types";

export const setJobs = (results) => {
  return {
    type: SET_JOBS,
    payload: results,
  };
};

export const getJobs = () => {
  return async (dispatch) => {
    const fetch_jobs = await axios.get("http://learnroom.herokuapp.com/job");
    const { data, status, statusText } = fetch_jobs;
    console.log(fetch_jobs);
    if (status === 200 && statusText === "OK") {
      dispatch(setJobs(data));
    }
  };
};
