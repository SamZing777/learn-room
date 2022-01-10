
import * as actionType from '../user/userType';
import axios from 'axios';


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
