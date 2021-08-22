import React, { useState } from "react";
import {
  Image, SafeAreaView, ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../Styles/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const facebookIcon = require("../../App/assets/images/icons/facebook.png");
  const googleIcon = require("../../App/assets/images/icons/google.png");
  const appleIcon = require("../../App/assets/images/icons/apple.png");


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.header}>Login your learnroom account</Text>
        <View style={styles.socialButtons}>

          {/* Facebook Social media button */}
          <TouchableOpacity style={styles.fbSocialBtn}>
            <Image source={facebookIcon} style={styles.socialIcon} />
            <Text style={styles.socialBtnTxt}>Login with Facebook</Text>
          </TouchableOpacity>

          {/* Google social media button */}
          <TouchableOpacity style={styles.googleSocialBtn}>
            <Image source={googleIcon} style={styles.socialIcon} />
            <Text style={styles.socialBtnTxt}>Login with Google</Text>
          </TouchableOpacity>

        </View>

        {/* Email Login */}
        <View style={styles.EmailLoginView}>
          <Text style={styles.header}>Login with email</Text>
          <View style={styles.formFieldView}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={(event) => setEmail(event)}
              value={email}
              style={styles.inputField}
            />
          </View>
          <View style={styles.formFieldView}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={(event) => setPassword(event)}
              value={password}
              style={styles.inputField}
            />
          </View>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>Sign me In</Text>
          </TouchableOpacity>
          <View style={styles.signInView}>
            <Text style={styles.signInText}>don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
              <Text style={styles.signInBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: wp(3),
      paddingTop: 10,
    },
    header: {
      fontFamily: "Rubik-Bold",
      color: Colors.primary,
      fontWeight: "700",
      fontSize: hp(2.8),
      textAlign: "center",
      opacity:0.5
    },
    socialButtons: {
      marginTop: hp(2),
    },
    fbSocialBtn: {
      backgroundColor: Colors.blue,
      height: hp(7),
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: hp(2),
    },
    socialIcon: {
      height: 20,
      width: 20,
      marginRight: 10,
    },
    socialBtnTxt: {
      color: Colors.white,
      fontSize: hp(2.2),
      fontFamily: "Rubik-Regular",
    },
    googleSocialBtn: {
      backgroundColor: Colors.red,
      height: hp(7),
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: hp(2),
    },

    //  Email Login
    formFieldView: {
      height: hp(10),
      width: "100%",
      marginBottom: hp(2.2),
      justifyContent: "space-between",
    },
    label: {
      fontFamily: "Rubik-Medium",
      fontSize: hp(2.3),
    },
    inputField: {
      height: hp(7),
      borderColor: "grey",
      borderWidth: 1.8,
      fontSize: hp(2.3),
      paddingHorizontal: 10,
      borderRadius: 5,
      fontFamily: "Rubik-Light",
    },
    submitBtn:{
      backgroundColor:Colors.primary,
      width: "100%",
      justifyContent:'center',
      alignItems: 'center',
      height:65,
      borderRadius: 5
    },
    submitBtnTxt:{
      color: Colors.white,
      fontSize:hp(2.5),
      fontFamily:'Rubik-Bold'
    },
    signInView:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:'100%',
      marginTop: hp(5)
    },
    signInText:{
      fontFamily:'Rubik-Medium'
    },
    signInBtnText:{
      fontFamily:'Rubik-Medium',
      color:Colors.secondary
    }
  },
);

export default Login;
