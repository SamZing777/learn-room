import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView
} from "react-native";
import { Colors } from "../../theme/colors";
import BackButton from '../../components/backButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import SettingsImg from '../../assets/icons/Settings.svg';
import Bell from '../../assets/icons/settingsBell.svg';
import ProfileIcon from '../../assets/icons/profileIcon.svg';
import MailIcon from '../../assets/icons/mailIcon.svg';
import LockIcon from '../../assets/icons/lockIcon.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationProps } from '../../types/Navigations';


const Settings = ({navigation}: NavigationProps): JSX.Element => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView >

      <ScrollView style={styles.container} 
      showsVerticalScrollIndicator={false} 
      >
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <BackButton navigation={navigation}/>
        <Text style={{fontSize:hp(2.7), fontFamily:'Rubik-Bold'}}>
              Settings
        </Text>
        <View></View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
          <SettingsImg width={hp(50)} height={hp(40)} />
      </View>
      <View style={styles.btnLinks}>
        <Bell />
        <Text style={styles.btnLinksTxt}>Notifications</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />   
      </View>
      <Text style={styles.accountInfo}>
        Account information
      </Text>
      <View style={styles.btnLinks}>
        <ProfileIcon />
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.btnLinksTxt}>Name</Text>
          <Text style={styles.infoText}> Juana Antonieta</Text>
        </View>

        <TouchableOpacity>
        <MaterialCommunityIcons name="chevron-right" color={Colors.gray} size={26} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnLinks}>
        <MailIcon />
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.btnLinksTxt}>Email</Text>
          <Text style={styles.infoText}> juanita123@gmail.com</Text>
        </View>
        <TouchableOpacity>
        <MaterialCommunityIcons name="chevron-right" color={Colors.gray} size={26} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnLinks}>
        <LockIcon />
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.btnLinksTxt}>Password</Text>
          <Text style={styles.infoText}>changed 2 weeks ago</Text>
        </View>
        <TouchableOpacity>
        <MaterialCommunityIcons name="chevron-right" color={Colors.gray} size={26} />
        </TouchableOpacity>
      </View>
      <View style={styles.space}>
      </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container:{
    paddingVertical:hp(2.8),
    paddingHorizontal:hp(3),
  },
  btnLinks:{
    borderRadius:16,
    borderWidth:0.8,
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    flexDirection:'row',
    marginBottom:20

  },
  btnLinksTxt:{
    fontFamily:'Rubik-SemiBold',
    fontSize:hp(2.4),
  },
  accountInfo:{
    fontFamily:'Rubik-SemiBold',
    fontSize:hp(2.4),
    marginBottom:20
  },
  infoText:{
    fontFamily:'Rubik-Light',
    fontSize:hp(1.8),
    marginTop:3
  },
  space:{
    height:20
  }

})

export default  Settings
