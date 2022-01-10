import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../modules/Auth/SignUp";
import Login from "../modules/Auth/Login";
import SplashScreen from "../modules/Screens/splashScreen";
import TabNavigator from "./tabNavigator";
import OnboardingScreen from "../modules/Screens/OnboardingScreen";
import OnboardingSecondScreen from "../modules/Screens/OnboardingSecondScreen";
import OnboardingThirdScreen from "../modules/Screens/OnboardingThirdScreen";


const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator><Stack.Screen name="SplashScreen" component={SplashScreen}
                      options={{
                        headerShown: false,
                      }} />
      
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}
                      options={{
                        headerShown: false,
                      }}
        
        />
        <Stack.Screen name="OnboardingSecondScreen" component={OnboardingSecondScreen}
                      options={{
                        headerShown: false,
                      }}
        
        />
        <Stack.Screen name="OnboardingThirdScreen" component={OnboardingThirdScreen}
                      options={{
                        headerShown: false,
                      }}
        
        />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignUp" component={SignUp}
                      options={{
                        headerShown: false,
                      }} />
        <Stack.Screen name="TabNavigator" component={TabNavigator}
                      options={{
                        headerShown: false,
                      }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AuthStackNavigator;
