import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from "react-native";

import { Colors } from "../../Styles/colors";

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text> Account View</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.apple
  }
})

export default  Account
