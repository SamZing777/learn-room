import * as React from 'react';
import {useRef, useEffect} from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity
} from 'react-native';
// @ts-ignore
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import OnboardingImg2 from '../../../assets/icons/OnboardingImg2.svg';

const OnboardingThirdScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.containerWrapper}>
             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View style={styles.SkipWrapper}>
                    <Text style={styles.Skip}>Skip</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <OnboardingImg2/>
                <View style={styles.TextWrapper}>
                    <Text style={styles.TextBold}>Improve your skills</Text>
                    <Text style={styles.TextLight}>Quarantine is the perfect time to spend your day learning something
                    new, from anywhere!
                    </Text>
                </View>
                <View style={styles.DotsWrapper}>
                    <View style={styles.Dots}></View>
                    <View style={styles.Dots}></View>
                    <View style={styles.ActiveDots}></View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.NextWrapper}>
                <Text style={styles.Next}>Next</Text>
            </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        containerWrapper:{
            flex:1
        },
        container: {
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: hp(10),       
        },
        TextWrapper: {
            marginTop: hp(2),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: hp(9),
            marginBottom: hp(3)
        },
        TextBold: {
            fontFamily:'Rubik-Bold',
            fontSize: hp(4.5),
            lineHeight: hp(6),
            marginBottom: hp(2)
        },
        TextLight: {
            fontFamily:'Rubik-Light',
            fontStyle: "normal",
            fontSize: hp(2),
            lineHeight: hp(4),
        },
        NextWrapper: {
            marginTop: hp(14),
            marginHorizontal: hp(5),
            backgroundColor: "#E3562A",
            borderRadius: 16,
            paddingVertical: hp(3),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            
        },
        Next: {
            color: "#fff",
            fontFamily:'Rubik-Medium',
            fontSize: hp(3)
        },
        SkipWrapper: {
           position: "absolute",
           top: hp(3),
           right: hp(2),

        },
        Skip: {
            fontFamily:'Rubik-Bold',
            color: "#78746D",
        },
        DotsWrapper: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        ActiveDots: {
            backgroundColor: "#65AAEA",
            paddingHorizontal: hp(1.5),
            paddingVertical: hp(0.5),
            marginHorizontal: hp(1.5),
            borderRadius: 10
        },
        Dots: {
            backgroundColor: "#D5D4D4",
            borderRadius: 20,
            paddingHorizontal: hp(0.5),
            paddingVertical: hp(0.5),
            marginHorizontal: hp(1.5)
        }
    }
)

export default OnboardingThirdScreen;
