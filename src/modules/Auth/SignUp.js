import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../Styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { register } from "../../Redux/actions/register";

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
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Create your learnroom account</Text>
        <View style={styles.registerForm}>
          <View style={styles.formFieldView}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              onChangeText={(event) => setName(event)}
              value={name}
              style={styles.inputField}
            />
          </View>
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
              secureTextEntry={true}
              onChangeText={(event) => setPassword(event)}
              value={password}
              style={styles.inputField}
            />

          </View>
          <View style={styles.formFieldView}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={(event) => setConfirmPassword(event)}
              value={confirmPassword}
              style={styles.inputField}
            />
          </View>
          <TouchableOpacity style={styles.submitBtn} onPress={submitHandler}>
            <Text style={styles.submitBtnTxt}>Sign me Up</Text>
          </TouchableOpacity>
          <View style={styles.signInView}>
            <Text style={styles.signInText}>Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signInBtnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { register })(SignUp);

const styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: 24,
      paddingTop: 18,
    },
    header: {
      fontFamily: "Roboto-Bold",
      color: Colors.primary,
      fontWeight: "bold",
      fontSize: hp(2.8),
      textAlign: "center",
    },
    registerForm: {
      marginTop: hp(2),
      justifyContent: "center",
      alignItems: "center",
    },
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
    submitBtn: {
      backgroundColor: Colors.primary,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 65,
      borderRadius: 5,
    },
    submitBtnTxt: {
      color: Colors.white,
      fontSize: hp(2.5),
      fontFamily: "Rubik-Bold",
    },
    signInView: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginTop: hp(5),
    },
    signInText: {
      fontFamily: "Rubik-Medium",
    },
    signInBtnText: {
      fontFamily: "Rubik-Medium",
      color: Colors.secondary,
    },
  },
);

