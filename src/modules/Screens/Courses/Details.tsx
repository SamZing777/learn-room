import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from "../../../theme/colors";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
  } from 'react-native-responsive-screen';
import Fonts from "../../../theme/fonts";
import BackButton from "../../../components/backButton";
import {useNavigation} from '@react-navigation/native'
import Productdetails from '../../../assets/icons/productdetails.svg';
import { NavigationProps } from "../../../types/Navigations";

const Details = ({ route, navigation }: any) => {
  //  const navigation = useNavigation();
     const { item } = route.params;
    return (
        <ScrollView>
            <View style={styles.parentView}>  
              <View style={styles.headerWrapper}>
                <BackButton navigation={navigation}/>
                <Text style={styles.heading}>
                    {item.title}
                </Text>
                <View></View>
              </View>
              <View style={styles.container}>
                <Productdetails/>
                <View style={styles.aboutWrapper}>
                    <View style={styles.about}>
                        <Text style={styles.aboutHead}>About the course</Text>
                        <Text style={styles.aboutContent}>
                            {item.description}
                        </Text>
                    </View>
                    <View style={styles.about}>
                        <Text style={styles.aboutHead}>Duration</Text>
                        <Text style={styles.aboutContent}>1h 30min</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.addCardWrapper}>
                            <Text style={styles.addCard}>Add to cart</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    parentView:{
        paddingVertical: hp(2.8),
        paddingHorizontal: hp(2)
    },
    headerWrapper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    heading: {
        fontSize: hp(3), 
        fontFamily: Fonts.RubikMedium,
        fontWeight: "600",
        textAlign: "center",
        paddingHorizontal: hp(2)
    },
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: hp(1),  
    },
    aboutWrapper: {
        paddingHorizontal: hp(2),
        paddingVertical: hp(3),
    },
    about: {
      marginTop: hp(1)
    },
    aboutHead: {
        fontSize: hp(3), 
        fontFamily: Fonts.RubikBold,
    },
    aboutContent: {
        marginTop: hp(1),
        fontFamily: Fonts.RubikMedium,
        fontSize: hp(2),
        lineHeight: hp(3),
    },
    addCardWrapper: {
        marginTop: hp(3.5),
        marginHorizontal: hp(5),
        backgroundColor: "#E3562A",
        borderRadius: 16,
        paddingVertical: hp(2.5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        
    },
    addCard: {
        color: "#fff",
        fontFamily:'Rubik-Medium',
        fontSize: hp(2.5)
    }
})


export default Details