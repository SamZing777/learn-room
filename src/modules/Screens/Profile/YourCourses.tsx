import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Fonts from "../../../theme/fonts";
import { Colors } from "../../../theme/colors";
// @ts-ignore
import BackButton from "../../../components/backButton";
import CoolKidsAloneTime from "../../../assets/icons/CoolKidsAloneTime.svg"
import CoolKidsPerforming from "../../../assets/icons/CoolKidsPerforming.svg"
import { NavigationProps } from "../../../types/Navigations";

const YourCourses = ({navigation}: NavigationProps) => {
  return (
     <ScrollView>
        <View style={styles.parentView}>  
            <View style={styles.headerWrapper}>
              <BackButton navigation={navigation}/>
              <Text style={styles.heading}>
                 Your Courses
              </Text>
              <View></View>
            </View>
            <View style={styles.containerWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("courseLesson")}>
                <View style={styles.container}>
                  <View style={{backgroundColor: "#F8F2EE", paddingVertical: hp(2)}}>
                    <CoolKidsAloneTime style={styles.image}/>
                  </View>
                  <View style={styles.textWrapper}>
                    <Text style={styles.subtitle}>Left 1 h 20 min</Text>
                    <Text style={styles.title}>Swift</Text>
                    <Text style={styles.bodyText}>Advanced iOS apps</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container}>
                  <View style={{backgroundColor: "E6EDF4", paddingVertical: hp(2)}}>
                    <CoolKidsPerforming style={styles.image}/>
                  </View>
                  <View style={styles.textWrapper}>
                    <Text style={styles.subtitle}>Left 1 h 20 min</Text>
                    <Text style={styles.title}>Scrum</Text>
                    <Text style={styles.bodyText}>Advanced project organization course</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
        </View>
     </ScrollView>
  )
}

export default YourCourses;  

const styles = StyleSheet.create({
    parentView:{
        paddingVertical: hp(2.8),
    },
    headerWrapper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: hp(3)
    },
    heading: {
        fontSize: hp(4), 
        fontFamily: Fonts.RubikMedium,
        fontWeight: "400",
        textAlign: "center",
    },
    containerWrapper: {
       paddingVertical: hp(4),
       paddingHorizontal: hp(2.5)   
    },
    container: {
        marginBottom: hp(2),
        borderWidth: 1,
        borderColor: "#BEBAB3",
        borderRadius: 10
    },
    image: {
      width: "100%",
    },
    textWrapper: {
        paddingVertical: hp(2),
        marginLeft: hp(3),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center"
    },
    subtitle: {
       color: "#5BA092",
       fontFamily: Fonts.RubikMedium,
       fontWeight: "500",
       marginBottom: hp(1)
    },
    title: {
      color: Colors.black,
      fontFamily: Fonts.RubikBold,
      fontSize: 24,
      marginBottom: hp(1)
    },
    bodyText: {
        
    }
})