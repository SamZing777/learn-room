import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import { Colors } from "../../Styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Fonts from '../../Styles/fonts';
import { connect } from "react-redux";
// @ts-ignore
import NotificationBell from '../../assets/icons/notificationBell.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../../components/category';
// @ts-ignore
import CourseImage from '../../assets/icons/CourseImage.svg'
import { getCourses } from "../../Redux/actions/getCourses";
import axios from 'axios';

const Courses = (props) => {

  const { getCourses } = props;

  const { courses } = props.courses;
  console.log(courses)
 // const courseData = courses.results;
  
  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://learnroom.herokuapp.com/course/courses/");
      console.log(res)
    }
    fetchData()
    //eslint-disable-next-line
  }, []);

  const renderCourseItem = ({ item }) => {
    return (
      <View style={styles.courseItemWrapper}>
        <Image source={item.thumb_nail} style={styles.courseItemImage} />
        <Text>{item.title}</Text>
        <Text>Simpson</Text>
        <View style={styles.rating}>
          <MaterialCommunityIcons name="star" color={Colors.yellow} size={26}/>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.parentView}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal: hp(3)}}>
          <View>
              <Text style={styles.greet}>Hello,</Text>
              <Text style={styles.name}>Juanita Antonio</Text>
          </View>
          <NotificationBell />
        </View>
        <View style={styles.search}>
          <TextInput
            placeholder="Search course"
            style={styles.searchInput}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons name="book-search-outline" color={Colors.gray} size={26} style={{marginTop: hp(1.5)}}/>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.category} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.categoryText}>Category:</Text>
            <Category title='redux' onPress={() =>console.log("hello")} />
            <Category title='Swift' onPress={() =>console.log("hello")} />
            <Category title='UX' onPress={() =>console.log("hello")} />
            <Category title='UI' onPress={() =>console.log("hello")} />
        </ScrollView>
        <View style={styles.academyWrapper}>
          <Text style={styles.academyText}>Academy</Text>
          <View style={styles.courseWrapper}>
           {/* <FlatList
              data={courseData}
              renderItem={renderCourseItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
           />*/}
          </View>
        </View>
    </View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  courses: state.courseReducer
});

export default connect(mapStateToProps, { getCourses })(Courses)

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor:Colors.background,

  },
  parentView:{
    paddingVertical:hp(2.8),
    paddingLeft: hp(2)
  },
  text:{
    color:Colors.black,
    fontFamily:Fonts.RubikMedium,
  },
  greet:{
    fontSize:hp(2),
    fontFamily:Fonts.RubikLight
  },
  name:{
    fontFamily:Fonts.RubikSemiBold,
    fontSize:hp(3.4),
    marginTop:10
  },
  search:{
    marginHorizontal: hp(1.5),
    borderColor:Colors.gray,
    borderWidth:2,
    paddingHorizontal: 8,
    borderRadius:16,
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  searchInput:{
    fontSize:hp(1.8),
    fontFamily:Fonts.RubikSemiBold,
  },
  category:{
    marginTop:15,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginLeft: hp(1.5)
  },
  categoryText:{
    fontSize:hp(2),
    fontFamily:Fonts.RubikLight,
    fontWeight: "400"
  },
  academyWrapper: {
    marginTop: hp(4),
    paddingLeft: hp(1.5),
    paddingTop: hp(2)
  },
  academyText: {
    fontSize:hp(2),
    fontFamily:Fonts.RubikLight,
    fontWeight: "400"
  },
  courseWrapper: {
    marginTop: hp(1),
    alignItems: "center"
  }
})


