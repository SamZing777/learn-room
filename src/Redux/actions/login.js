import * as actionType from '../user/userType'
import customRequest from '../../services/axiosConfig'

export const login = (email, password) => async (dispatch) => {
  console.log(email, password)
    dispatch({
      type: actionType.SET_USER_LOADING,
      payload: true
    })
    try{
        customRequest.post('/rest/login/',{
          username:'',
          email:email,
          password:password
        })
          .then(response => {
            console.log(response)
            dispatch({
              type: actionType.SET_USER_LOADING,
              payload: false
            })
          })
          .catch(error=>{
            console.log("Login response error", error)
            dispatch({
              type: actionType.SET_USER_LOADING,
              payload: false
            })
          })
    }
    catch(error){
          console.log("Login catch error", error)
          dispatch({
            type: actionType.SET_USER_LOADING,
            payload: false
          })
    }
}


