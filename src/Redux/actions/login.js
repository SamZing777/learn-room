import * as actionType from '../user/userType'
import axios from "axios";


export const login = (email, password) => async (dispatch) => {
  console.log(email, password)
    try{
        axios.post('http://learnroom.herokuapp.com/rest/login/',{
          username:'',
          email:email,
          password:password
        })
          .then(response => {
            console.log(response)
          })
          .catch(error=>{
            console.log("Login response error", error)
          })
    }
    catch(error){
          console.log("Login catch error", error)
    }
}


