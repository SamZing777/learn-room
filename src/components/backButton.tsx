import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";



const BackButton = () => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.backArrowBtn} onPress={()=>navigation.goBack()}>
             <Icon name="arrow-dropleft-circle" color={'black'} size={hp(4)}/>
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create(
    {
        backArrowBtn:{
            // // borderRadius:100,
            // padding:2,
            // width:40,
            // // borderColor:'grey',
            // borderWidth:2
        }
    }
)
