import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
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
import ProfileImage from "../../../assets/icons/profileImg.svg";
import BackButton from "../../../components/backButton";
import { connect } from "react-redux";
import logout from "../../../Redux/actions/logout";
import { NavigationProps } from "../../../types/Navigations";

const Profile = (props: any) => {
  const { navigation }: NavigationProps = props
  const { logout, loading } = props;
 // console.log(navigation)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <BackButton navigation={navigation}/>
          <Text style={{ fontSize: hp(2.7), fontFamily: Fonts.RubikBold }}>
            Profile
          </Text>
          <View>

          </View>
        </View>
        <View style={styles.profileImgView}>
          <View style={styles.profileImage}>
            <ProfileImage />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.profileLinks} onPress={() => {
          navigation.navigate("yourCourses")
          }}>
            <Text style={styles.profileLinksTxt}>Your Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileLinks}>
            <Text style={styles.profileLinksTxt}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileLinks}>
            <Text style={styles.profileLinksTxt}>Payment</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent:'center', alignItems:'center' }}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={logout}
            // disabled={loading ? true : false}
          >
            <Text style={styles.logoutBtnTxt}>Logout</Text>
          </TouchableOpacity>
          {/*loading &&
              <ActivityIndicator />
          */}
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2.8),
    paddingHorizontal: hp(3)
  },
  profileImgView: {
    marginTop: hp(4),
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    padding: 15,
    borderRadius: 100,
    borderColor: Colors.secondary,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1

  },
  backArrowBtn: {
    borderRadius: 50,
    padding: 2,
    width: 40,
    borderColor: "grey",
    borderWidth: 2
  },
  profileLinks: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: hp(1.5),
    borderColor: Colors.gray,
    borderWidth: 0.8,
    paddingVertical: hp(2.5)
  },
  profileLinksTxt: {
    fontFamily: Fonts.RubikSemiBold,
    fontSize: hp(2.3)
  },
  logoutBtn: {
    marginTop: hp(1.5),
    justifyContent: "center",
    alignItems: "center"
  },
  logoutBtnTxt: {
    fontFamily: Fonts.RubikSemiBold,
    color: Colors.darkGray


  }
});

const mapStateToProps = (state: any) => ({
  loading: state.userReducer.loading
});

// export default Profile

export default connect(mapStateToProps, {logout} )(Profile);
