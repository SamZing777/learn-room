import  * as actionType from '../user/userType';
import axios from 'axios';
import customRequest from "../../services/axiosConfig";

const logout = () => async dispatch => {
      console.log('logout')
        //set loading to true
        dispatch({
          type: actionType.SET_USER_LOADING,
          payload: true
        })

        await axios.post('http://learnroom.herokuapp.com/rest/logout/')
          .then((response) => {
            console.log(response);
            dispatch({
              type: actionType.SET_USER_LOADING,
              payload: false
            })
            dispatch({
              type: actionType.GET_USER_LOGOUT
            })
          })
          .catch((error) => {
            console.log("error on logout is", error.data);
            dispatch({
              type: actionType.SET_USER_LOADING,
              payload: false
            })
          })
}

export default logout
