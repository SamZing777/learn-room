import * as actionType from './type'
import axiosClient from '../../services/axiosConfig'
import { LoginValues } from "../../modules/Auth/Login";

export const login = (data: LoginValues) => async (dispatch: any) => {
  console.log(data)
    dispatch({type: actionType.SET_USER_LOADING, payload: true })
    try{
      const response = await axiosClient.post('/rest/login/', {data})
      dispatch({ type: actionType.GET_USER_SUCCESS, payload: response })
    }
    catch(error){
          console.log("Login catch error", error)
          dispatch({ type: actionType.GET_USER_FAILURE, payload: error }) 
    } finally {
        dispatch({ type: actionType.SET_USER_LOADING, payload: false })
    }
}

/*export const logout = () => async dispatch => {
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

export const register = (username, email, password, navigation) => async (dispatch) => {
    const data = {
      username:username,
      email:email,
      password1:password,
      password2:password
    }
    console.log(username, email, password)
    try {
        await fetch('http://learnroom.herokuapp.com/rest/registration/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'  // I added this line
          },
          body: JSON.stringify(data),
        })
  
          .then( response => {
            console.log(response)
            navigation.navigate('TabNavigator')
          })
          .catch(error => {
            console.log(error)
            navigation.navigate('TabNavigator')
          })
    }
    catch (error){
        console.log(error)
    }
  }
  


*/