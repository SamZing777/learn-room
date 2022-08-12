import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Home from '../screens/home';
import Account from '../screens/account';
import Learning from '../screens/students/learning';
import Course from '../screens/students/course';

// import About from '../screens/about';
// import Contact from '../screens/contact';
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Learning" component={Learning} />
        <Tab.Screen name="Account" component={Account} />
        <Stack.Screen name="Course" component={Course}  
            options={{ tabItemStyle: {height: 0}, headerShown: false }} 
          />
      </Tab.Navigator>      
    </NavigationContainer>
  )
}

export default TabNavigation;
