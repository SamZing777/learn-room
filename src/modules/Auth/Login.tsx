import React, { useState } from "react";
import {
  Image, SafeAreaView, ScrollView,
  StyleSheet,
  Text, 
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import { Colors } from "../../theme/colors";
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
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { NavigationProps } from "../../types/Navigations";
import { TextInput } from "../../components/TextInput/index"

type FormValues = {
  name: string;
  email: string;
  password: string
}


const Login = (props: any) => {
  const { navigation } : NavigationProps = props;
  const { login } = props;
  const [loading, setLoading] = useState(false)
 // const [email, setEmail] = useState("");
 // const [password, setPassword] = useState("");
 const {...methods} = useForm<FormValues>() 

  const loginUser: SubmitHandler<FormValues> = (data) => {
  //  login(email, password);
    try {
      setLoading(true)
      console.log(data)
      login(data);
    } catch (error) {
      
    } finally {
      setLoading(false)
    }

  };

  return (
    <KeyboardAwareScrollView
    style = {{ flex: 1 }} 
>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView >
      <View style={styles.container}>
        <View>
          <LoginImage height={hp(30)} width={wp(80)}/>
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
         <FormProvider {...methods}>
           <TextInput 
            name="email"
            label="Email"
            placeholder='Enter email'
            style={styles.formField}
            keyboardType="email-address"
            rules={{
              pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'},
              required: 'Email is required!'
            }}
          />
          <TextInput 
            name="password"
            label="Password"
            placeholder='Password'
            style={styles.formField}
            secureTextEntry
            rules={{
              required: 'Password is required!'
            }}
          />
          </FormProvider>
        <TouchableOpacity style={styles.signUpBtn} onPress={methods.handleSubmit(loginUser)}>
          <Text style={styles.signUpBtnTxt}>
            {loading ? <ActivityIndicator size="small" color="#ffffff" /> : "Log In"}
          </Text>
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
      marginTop:10,
      marginBottom: 10
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

