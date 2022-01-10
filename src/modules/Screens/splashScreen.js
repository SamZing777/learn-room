import * as React from 'react';
import {useRef, useEffect} from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Animated
} from 'react-native';
// @ts-ignore
import Illustration from '../../assets/icons/illustration.svg';
import {Colors} from '../../Styles/colors';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'


const SplashScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translate = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const translateX = () =>{
      Animated.timing(translate,{
          toValue: 1,
          duration:2000,
          useNativeDriver:true
      }).start();
  }

  useEffect(() => {
    fadeOut();
    translateX();

  }, []);

  useEffect(() => {
    setTimeout(() => {
     navigation.replace('OnboardingScreen')
    }, 3000)
  })

  const rotateHolder = translate.interpolate(
      {
          inputRange:[0,1],
          outputRange:['0 deg', '360 deg']
      }
  )

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={{opacity:fadeAnim}}>
                <Illustration />
                <Animated.Text style={[styles.learnRoomTxt, {opacity:fadeAnim, transform: [{rotateX:rotateHolder}]} ]}>LearnRoom</Animated.Text>
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        learnRoomTxt:{
            fontFamily:'Rubik-Bold',
            fontSize:hp(4.5),
            textAlign:'center',
            marginTop:hp(2),
        }
    }
)

export default SplashScreen
