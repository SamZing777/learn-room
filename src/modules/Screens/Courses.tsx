import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Colors } from "../../Styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import NotificationBell from '../../assets/icons/notificationBell.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../../components/category';
import CourseImage from '../../assets/icons/CourseImage.svg'

const Courses = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.parentView}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View>
              <Text style={styles.greet}>Hello,</Text>
              <Text style={styles.name}>Juanita Antonio</Text>
          </View>
          <NotificationBell />
        </View> 
        <View style={styles.search}>
          <TextInput 
            placeholder="Search course"
            style={styles.searchInput}
          />
          <TouchableOpacity>
          <MaterialCommunityIcons name="book-search-outline" color={Colors.gray} size={26} />
          </TouchableOpacity>
        </View> 
        <ScrollView contentContainerStyle={styles.category} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.categoryText}>Category</Text>
            <Category title='redux' onPress={() =>console.log("hello")} />
            <Category title='Swift' onPress={() =>console.log("hello")} />
            <Category title='UX' onPress={() =>console.log("hello")} />
            <Category title='UI' onPress={() =>console.log("hello")} />
        </ScrollView> 
        <View>
            <View style={styles.course}>      
                <CourseImage />
            </View>
        </View>  
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex: 1, 
    backgroundColor:Colors.background,
    
  },
  parentView:{
    paddingVertical:hp(2.8),
    paddingHorizontal:hp(3),
  },
  text:{
    color:'black',
    fontFamily:'Rubik-Medium'
  },
  greet:{
    fontSize:hp(2),
    fontFamily:'Rubik-light'
  },
  name:{
    fontFamily:'Rubik-SemiBold',
    fontSize:hp(3.4),
    marginTop:10
  },
  search:{
    borderColor:Colors.gray,
    borderWidth:2,
    padding:18,
    borderRadius:16,
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  searchInput:{
    fontSize:hp(1.8),
    fontFamily:'Rubik-SemiBold',
  },
  category:{
    marginTop:15,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  categoryText:{
    fontSize:hp(1.8),
    fontFamily:'Rubik',
  },
  course:{

  }

})

export default  Courses