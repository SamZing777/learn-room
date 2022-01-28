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
import { Colors } from "../../../theme/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Fonts from '../../../theme/fonts';
import { connect } from "react-redux";
// @ts-ignore
import NotificationBell from '../../../assets/icons/notificationBell.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../../../components/category';
// @ts-ignore
//import CourseImage from '../../assets/icons/CourseImage.svg'
import { getCourses } from "../../../Redux/actions/getCourses";
import axios from 'axios';
import courses from '../../../data/index';
import { NavigationProps } from "../../../types/Navigations";

const Courses = ({navigation}: NavigationProps) : JSX.Element => {
 /* const { getCourses } = props;

  const { courses } = props.courses;
   console.log(courses)
  const courseData = courses.results;
  
  React.useEffect(() => {
  getCourses()
    async function fetchData() {
      await axios.get("http://learnroom.herokuapp.com/course/courses/")
      .then((res) => console.log(res, 'res')).catch((err) => console.log(err))
    }
    fetchData()
    //eslint-disable-next-line
  }, []);*/

  const renderCourseItem = ({ item }: any) => {
  
    return (
      <View style={styles.courseItemWrapper}>
        <TouchableOpacity style={styles.courseItemImageWrapper} onPress={() => {
          navigation.navigate("productDetail", {
            item: item,
          })
        }}>
          <Image source={require('../../../assets/Ican.jpg')} style={styles.courseItemImage} />
        </TouchableOpacity>
        <Text style={styles.courseItemTitle}>{item.title}</Text>
        <Text style={styles.courseItemSubtitle}>Simpson</Text>
        <View style={styles.courseRating}>
          <View style={styles.rating}>
            <MaterialCommunityIcons name="star" color={Colors.yellow} size={26}/>
            <MaterialCommunityIcons name="star" color={Colors.yellow} size={26}/>
            <MaterialCommunityIcons name="star" color={Colors.yellow} size={26}/>
            <MaterialCommunityIcons name="star" color={Colors.yellow} size={26}/>
            <MaterialCommunityIcons name="star" color={Colors.yellow} size={26}/>
          </View>
          <Text>(10,252)</Text>
        </View>
        <Text style={styles.price}>${item.live_class_price}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
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
            <Category title='Finacial Market' onPress={() =>console.log("hello")} />
            <Category title='Linguistics' onPress={() =>console.log("hello")} />
            <Category title='Master Class' onPress={() =>console.log("hello")} />
            <Category title='Professional' onPress={() =>console.log("hello")} />
        </ScrollView>
        <View style={styles.academyWrapper}>
          <Text style={styles.academyText}>Academy</Text>
          <View style={styles.courseWrapper}>
            <FlatList
              data={courses.results}
              renderItem={renderCourseItem}
              keyExtractor={(item: any) => item.id}
              horizontal={true}
           />
          </View>
        </View>
        <View style={styles.academyWrapper}>
          <Text style={styles.academyText}>Digital Skills</Text>
          <View style={styles.courseWrapper}>
            <FlatList
              data={courses.results}
              renderItem={renderCourseItem}
              keyExtractor={(item: any) => item.id}
              horizontal={true}
           />
          </View>
        </View>
    </View>
    </ScrollView>
  )
}

const mapStateToProps = (state: any) => ({
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
    marginLeft: hp(1.5),
    marginBottom: hp(4)
  },
  categoryText:{
    fontSize:hp(2),
    fontFamily:Fonts.RubikLight,
    fontWeight: "400"
  },
  academyWrapper: {
    paddingLeft: hp(1.5),
    paddingTop: hp(2),
    marginBottom: hp(2)
  },
  academyText: {
    fontSize:hp(2),
    fontFamily:Fonts.RubikMedium,
    fontWeight: "400"
  },
  courseWrapper: {
    marginTop: hp(1),
    alignItems: "center"
  },
  courseItemWrapper: {
    paddingRight: hp(3),
    display: "flex",
    flexDirection: "column",
  },
  courseItemImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(1.5)
  },
  courseItemImage: {
    width: 100,
    height: 100,
  },
  courseItemTitle: {
    fontFamily: Fonts.RubikMedium,
    fontSize: hp(2),
    lineHeight: hp(3)
  },
  courseItemSubtitle: {
    fontFamily: Fonts.RubikMedium,
    fontSize: hp(2),
    color: Colors.gray,
    lineHeight: hp(3)
  },
  courseRating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    marginTop: hp(1)
  }
})


