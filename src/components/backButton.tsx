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
import { Colors } from '../theme/colors';
import { NavigationProps } from '../types/Navigations';


const BackButton = ({navigation}: NavigationProps): JSX.Element => {
    return(
        <TouchableOpacity style={styles.backArrowBtn} onPress={()=>navigation.goBack()}>
             <Icon name="arrow-back" color={'black'} size={hp(4)}/>
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create(
    {
        backArrowBtn:{
          backgroundColor: Colors.white,
          borderRadius: 40,
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
    }
)
