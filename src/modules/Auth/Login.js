import React, { useState } from "react";
import {
  Image, SafeAreaView, ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Colors } from "../../Styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { login } from "../../Redux/actions/login";
import { connect } from "react-redux";
import LoginImage from "../../assets/icons/illustration-3.svg"
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg"
import Google from "../../assets/icons/google.svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const Login = (props) => {
  const { navigation, login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    login(email, password);
  };

  return (
    <KeyboardAwareScrollView
    style = {{ flex: 1 }} 
>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<SafeAreaView >
      <View style={styles.container}>
        <View >
          <LoginImage />
          <View>
            <Text style={styles.loginTxt}>Log in</Text>
            <Text style={styles.socialText}>Login with social networks</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.icon}>
                  <Facebook />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                  <Instagram />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                  <Google />
              </TouchableOpacity>
            </View>
            <TextInput 
            placeholder='E-mail'
            style={styles.formField}
            value={email}
            onChangeText={(event) => {setEmail(event)}}
        />
        <TextInput 
            placeholder='Password'
            style={styles.formField}
            value={password}
            onChangeText={(event) => {setPassword(event)}}
            secureTextEntry
        />
        <TouchableOpacity style={styles.signUpBtn} onPress={submitHandler}>
          <Text style={styles.signUpBtnTxt}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpTxt}>
          Sign Up
        </Text>
        </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>

  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { login })(Login);


const styles = StyleSheet.create(
  {
    container: {
      paddingVertical:hp(2.8),
      paddingHorizontal:hp(3),
      paddingTop: hp(6),
    },
    loginTxt:{
      fontFamily:'Rubik-Medium',
      fontSize:hp(2.8),
      textAlign:'center',
      marginTop:12,
    },
    socialText:{
      fontFamily:'Rubik-light',
      fontSize:hp(1.7),
      textAlign:'center',
      marginTop:12,
    },
    socialIcons:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10
    },
    icon:{
      marginRight:5
    }, 
    formField:{
      borderColor:Colors.gray,
      borderWidth:0.5,
      height:50,
      marginTop:hp(1.2),
      borderRadius:5,
      paddingHorizontal:20,
      fontSize:hp(1.8)
    },
    signUpBtn:{
      backgroundColor:Colors.red,
      marginTop: hp(1.5),
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5
    },
    signUpBtnTxt:{
      color:Colors.white,
      fontWeight:'bold',
    }, 
    signUpTxt:{
      textAlign:'center',
      color:Colors.gray,
      fontFamily:'Rubik-Medium',
      marginTop:hp(2)
    }
  }
);

