/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import AppNavigator from './src/navigation/stackNavigator'
 import { Provider } from 'react-redux'
 import { store } from "./src/Redux/store";
//import NavigationService from './src/services/navigation';

 const App = () => {
   return (
     <Provider store={store}>
        <AppNavigator/>
     </Provider>
   )
 };
 
 export default App;