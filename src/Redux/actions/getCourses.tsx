import * as actionType from '../course/courseType';
import { axiosClient } from '../../services/axiosConfig';
import axios from 'axios'

export const getCourses = () => async (dispatch) => {
  try {
      const response = await axios.get("http://learnroom.herokuapp.com/course/courses/")
      console.log(response)
      dispatch({type: actionType.GET_COURSE_SUCCESS, payload: response.data})
  }
  catch (error){
   // console.log("courses api error",error)
      dispatch({type: actionType.GET_COURSE_FAILURE,payload: error})
  }
};
