import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Icon from 'react-native-ionicons';
import { Colors } from "../../Styles/colors";
import ProfileImage from '../../assets/icons/profileImg.svg';
import BackButton from '../../components/backButton'

const Account = (props) => {
  const {navigation} = props
  return (
    <SafeAreaView >
      <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center',}}>
          <BackButton />
            <Text style={{textAlign:'center',marginLeft:100, fontSize:hp(2.7), fontFamily:'Rubik-bold'}}>
              Profile
            </Text>
      </View>
      <View style={styles.profileImgView}>
        <View style={styles.profileImage}>
            <ProfileImage/>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.profileLinks}>
          <Text style={styles.profileLinksTxt}>Your Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileLinks}>
          <Text style={styles.profileLinksTxt}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileLinks}>
          <Text style={styles.profileLinksTxt}>Payment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutBtnTxt}>Logout</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:hp(2.8),
    paddingHorizontal:hp(3)
  },
  profileImgView:{
    marginTop:hp(4),
    justifyContent:'center',
      alignItems:'center'
  },
  profileImage:{
      padding:15,
      borderRadius:100,
      borderColor: Colors.secondary,
      borderWidth:3,
      justifyContent:'center',
      alignItems:'center',
      zIndex:1
      
  },
  backArrowBtn:{
    borderRadius:50,
    padding:2,
    width:40,
    borderColor:'grey',
    borderWidth:2
  },
  profileLinks:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    marginTop:hp(1.5),
    borderColor:Colors.gray,
    borderWidth:0.8,
    paddingVertical:hp(2.5)
  },
  profileLinksTxt:{
    fontFamily:'Rubik-SemiBold',
    fontSize:hp(2.3)
  },
  logoutBtn:{  
    marginTop:hp(1.5),
    justifyContent:'center',
    alignItems:'center'
  },
  logoutBtnTxt:{
    fontFamily:'Rubik-SemiBold',
    color:Colors.darkGray


  }
})

export default  Account
