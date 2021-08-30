import React, {useState} from 'react';
import TabNavigator from '../navigation/tabNavigator';
import AuthStackNavigator from '../navigation/stackNavigator';
import { SafeAreaView } from 'react-native';
import {
    Text
} from 'react-native'





const RootNavigator = () => {
    const [signedIn, setSignedIn] = useState(false);
    return(
        // <SafeAreaView>
            signedIn ? <TabNavigator></TabNavigator> 
             : signedIn && <AuthStackNavigator></AuthStackNavigator>
           
       
    )
    
}

export default RootNavigator;