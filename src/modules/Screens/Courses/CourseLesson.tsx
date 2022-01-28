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
import CourseVideo from "../../../assets/icons/CourseVideo.svg"
import PlayIcon from "../../../assets/icons/PlayIcon.svg"
import { NavigationProps } from "../../../types/Navigations";

const CourseLesson = ({navigation}: NavigationProps) : JSX.Element => {
    return (
      <ScrollView>
        <View style={styles.parentView}>
            <View style={styles.headerWrapper}>
              <BackButton navigation={navigation}/>
              <Text style={styles.heading}>
                 HTML
              </Text>
              <View></View>
            </View>
            <View style={styles.containerWrapper}>
                <View style={styles.topWrapper}>
                    <Text style={styles.header}>Tags For Headers</Text>
                    <Text style={styles.subHeader}>3 of 11 lessons</Text>
                </View>
                <View style={styles.videoWrapper}>
                    <CourseVideo/>
                    <View style={styles.play}>
                        <PlayIcon/>
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.information}>Introduction</Text>
                    <Text style={styles.text}>
                        You can launch a new career in web develop-
                        ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, 
                        a lot of determination, and a teacher you trust.
                        Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.
                    </Text>
                </View>
            </View>
        </View>
      </ScrollView>
    )
}

export default CourseLesson;

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
      marginTop: hp(2),
      paddingHorizontal: hp(3),
    },
    topWrapper: {
      paddingVertical: hp(2),
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: "600",
    },
    subHeader: {
      color: Colors.gray,
      paddingVertical: hp(1.5)     
    }, 
    videoWrapper: {
      backgroundColor: "#E6EDF4",
      borderRadius: 12,
      paddingVertical: hp(1.5),
      width: "100%"
    },
    play: {
      marginLeft: "auto",
      paddingHorizontal: hp(2),
    },
    textWrapper: {
      marginTop: hp(3),
    },
    information: {
        fontFamily: Fonts.RubikMedium,
        fontWeight: "500",
        fontSize: 20
    },
    text: {
      marginTop: hp(1),
      color: "#78746D",
      lineHeight: 21       
    }
})
