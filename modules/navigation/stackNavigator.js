import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";

const Stack  = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default AuthStackNavigator
