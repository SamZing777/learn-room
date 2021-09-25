import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../Styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { register } from "../../Redux/actions/register";
import SignUPSVG from '../../assets/icons/illustration-2.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-ionicons';

const SignUp = (props) => {
  const { navigation, register } = props;
  //form state values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {
    register(name, email, password, confirmPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.backArrowBtn}>
             <Icon name="arrow-dropleft-circle" color={'black'} size={30}/>         
        </TouchableOpacity>
        <View style={{marginTop:hp(3)}}>
          <SignUPSVG />
          <Text style={styles.signUpTxt}>Sign up</Text>
          <Text style={styles.createAcctTxt}>Create your account</Text>
        </View>
        <TextInput 
            placeholder='Name'
            style={styles.formField}
        />
        <TextInput 
            placeholder='E-mail'
            style={styles.formField}
        />
        <TextInput 
            placeholder='Password'
            style={styles.formField}
        />
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpBtnTxt}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.loginTxt}>
          Log in
        </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { register })(SignUp);

const styles = StyleSheet.create(
  {
    container: {
      paddingVertical:hp(2.8),
      paddingHorizontal:hp(3)
      
    },
    backArrowBtn:{
      borderRadius:100,
      padding:2,
      width:40,
      borderColor:'grey',
      borderWidth:2
    },
    signUpTxt:{
      fontFamily:'Rubik-Medium',
      fontSize:hp(2.8),
      textAlign:'center',
      marginTop:12,
    }, 
    createAcctTxt:{
      fontFamily:'Rubik-light',
      fontSize:hp(1.7),
      textAlign:'center',
      marginTop:12,
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
    loginTxt:{
      textAlign:'center',
      marginTop:hp(1),
      fontFamily:'Rubik',
      fontSize:hp(1.8)
    }
   
  },
);

