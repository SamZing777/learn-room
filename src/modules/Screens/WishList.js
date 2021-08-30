import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { color } from 'react-native-reanimated';
import { Colors } from "../../Styles/colors";

const WishList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>My WishList View</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:Colors.apple
  }

})

export default  WishList
