import * as actionType from '../course/courseType';
import axios from 'axios';

const getCourses = () => async (dispatch) => {
  try {
      await axios.get("http://learnroom.herokuapp.com/course/courses/")
        .then( response => {
          console.log("courses api response",response.data.results)
          dispatch(
            {
              type:actionType.GET_COURSE_SUCCESS,
              payload: response.data.results
            }
          )
        })
        .catch(error => {
          console.log("courses api error",error)
          dispatch(
            {
              type:actionType.GET_COURSE_SUCCESS,
            }
          )
        })
  }
  catch (error){

  }
}

export default getCourses;
