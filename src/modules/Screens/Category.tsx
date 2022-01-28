import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { Colors } from "../../theme/colors";

const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Category View</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:Colors.apple
  }
})

export default  Category
