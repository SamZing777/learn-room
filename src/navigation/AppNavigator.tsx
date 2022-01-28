import React from 'react';
//import { NavigationContainer } from "@react-navigation/native";
//import AuthStackNavigator from './authStackNavigator';
//import StackNavigator from './stackNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from "../modules/Screens/Onboarding/splashScreen";
import OnboardingScreen from "../modules/Screens/Onboarding/OnboardingScreen";
import OnboardingSecondScreen from "../modules/Screens/Onboarding/OnboardingSecondScreen";
import OnboardingThirdScreen from "../modules/Screens/Onboarding/OnboardingThirdScreen";


const navigationOptions: any= {
	header: null
};

const FirstNavigation = createStackNavigator(
  {
    First: {
        screen: SplashScreen,
    },
    Second: {
        screen: OnboardingScreen
    },
    Third: {
        screen: OnboardingSecondScreen
    },
    Fouth: {
        screen: OnboardingThirdScreen
    }
  },
  {
	defaultNavigationOptions: navigationOptions
  }
)
export const MainNavigator = createSwitchNavigator(
  {
    Welcome: {
        screen: FirstNavigation
    }
  },
  {
      initialRouteName: "Welcome"
  }
)

export default createAppContainer(MainNavigator);