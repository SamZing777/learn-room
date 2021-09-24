import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { Colors } from "../../Styles/colors";

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImage}>
        
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
  },
  profileImage:{
    
  }
})

export default  Account
