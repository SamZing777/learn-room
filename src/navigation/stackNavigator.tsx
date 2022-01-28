import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../modules/Auth/SignUp";
import Login from "../modules/Auth/Login";
import SplashScreen from "../modules/Screens/Onboarding/splashScreen";
import TabNavigator from "./tabNavigator";
import OnboardingScreen from "../modules/Screens/Onboarding/OnboardingScreen";
import OnboardingSecondScreen from "../modules/Screens/Onboarding/OnboardingSecondScreen";
import OnboardingThirdScreen from "../modules/Screens/Onboarding/OnboardingThirdScreen";
import productDetail from "../modules/Screens/Courses/Details"
import yourCourses from "../modules/Screens/Profile/YourCourses";
import courseLesson from "../modules/Screens/Courses/CourseLesson";


const Stack = createNativeStackNavigator();

const stackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="SplashScreen" component={SplashScreen}
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
      <Stack.Screen name="Login" component={Login} 
            options={{
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
       <Stack.Screen name="yourCourses" component={yourCourses}
                      options={{
                        headerShown: false,
                      }}
        
        />
       <Stack.Screen name="courseLesson" component={courseLesson}
                      options={{
                        headerShown: false,
                      }}
        
        />
      <Stack.Screen name="productDetail" component={productDetail}
                      options={{
                        headerShown: false,
                      }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default stackNavigator;
