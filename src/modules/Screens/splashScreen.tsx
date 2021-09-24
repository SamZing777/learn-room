import React from 'react';
import {
    View, 
    SafeAreaView, 
    Text, StyleSheet
} from 'react-native';
import Illustration from '../../assets/icons/illustration.svg';
import {Colors} from '../../Styles/colors';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'



const SplashScreen : React.FC = () => { 
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Illustration />
                <Text style={styles.learnRoomTxt}>LearnRoom</Text>
            </View>
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
            fontWeight:'bold',
            fontFamily:'Rubik-Bold',
            fontSize:hp(4.5),
            textAlign:'center',
            marginTop:hp(2)
        }
    }
)

export default SplashScreen
