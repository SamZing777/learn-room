import React from "react";
import {
  StyleSheet
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Account from "../modules/Screens/Account";
import Category from "../modules/Screens/Category";
import Featured from "../modules/Screens/Featured";
import MyLearning from "../modules/Screens/MyLearning";
import WishList from "../modules/Screens/WishList";
import {Colors} from "../Styles/colors";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../modules/Screens/splashScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    const account = require('../assets/icons/account.png')

 return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Colors.primary}
        inactiveColor={Colors.gray}
        shifting={false}
        barStyle={{ backgroundColor: Colors.white }}
      >
       
        <Tab.Screen name="Featured" component={Featured} 
              name="Featured" 
              component={Featured}
              options={{
                tabBarLabel: 'Featured',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="fridge" color={color} size={26} />
                ),
              }} 
        
        />
        <Tab.Screen name="WishList" component={WishList} 
              options={{
                tabBarLabel: 'Wish List',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="star-box-multiple" color={color} size={26} />
                ),
              }} 
        
        
        />
         <Tab.Screen name="Category" component={Category} 
              options={{
                tabBarLabel: 'Category',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="distribute-horizontal-center" color={color} size={26} />
                ),
              }} 
        
        
        />
         <Tab.Screen name="My Learning" component={MyLearning} 
              options={{
                tabBarLabel: 'Wish List',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="school" color={color} size={26} />
                ),
              }} 
        
        
        />
         <Tab.Screen 
        name="Profile" 
        component={Account}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}  
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create(
  {
    tabBarIcon:{
      height:15,
      width:15,
      marginBottom:5
    }
  }
)

export default TabNavigator;
