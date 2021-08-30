/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import AuthStackNavigator from "./src/navigation/stackNavigator";
import TabNavigator from './src/navigation/tabNavigator';
import RootNavigator from './src/modules/index'
import { Provider } from 'react-redux'
import {store } from "./src/Redux/store";

const App = () => {
  const [signedIn, setSignedIn] = useState(true)
  return (
    <Provider store={store}>
        {!signedIn && <AuthStackNavigator />}
        {signedIn && <TabNavigator />}
        
    </Provider>
  )
};

export default App;
