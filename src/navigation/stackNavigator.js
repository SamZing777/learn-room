import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from "../modules/Auth/SignUp";
import Login from "../modules/Auth/Login";

const Stack  = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{  
         headerShown: false,  
       }}   />
        <Stack.Screen name="SignUp" component={SignUp}
        options={{  
          headerShown: false,  
        }}    />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default AuthStackNavigator
