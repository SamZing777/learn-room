import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    BackHandler,
    Alert
} from 'react-native';

import Loading from '../components/loading';
import Data from '../components/renderData';
import Categories from '../components/categories';
import styles from '../styles/styles';


const Home = ({props, navigation}) =>{
    const[data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    
    const loadCourseData = async () =>{
        setIsLoading(true);
        await fetch('http://learnroom.herokuapp.com/courses/')
            .then(response => response.json())
            .then(data => {
                setIsLoading(false)
                setData(data.results)
            })
            .catch(() => {
                Alert.alert("Network error! Check your connection and try again.");
            })
        }

        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go exit app?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
    
        useEffect(() => {
            loadCourseData();

            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );
            return () => backHandler.remove();
        },[props]);

    const university = () =>{
        Alert.alert("This button will open universities");
    }

    return(
        <ScrollView>
            
            <View>
                <Image source={require("../images/cake.jpg")}
                style={styles.boxImage}/>
                <View style={styles.container}>
                    <Text style={styles.headingText}>
                        Learning in a real environment
                    </Text>
                    <Text style={styles.normalText}>
                        Skills for your present (and future)
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headingText}>
                    Top Courses available for you
                </Text>
            </View>

            {
            isLoading ? <Loading /> : null
            }
            <Data data={data} />

            <Categories />


        <View style={styles.container}>
            <Text style={styles.headingText}>
                Top Courses in Digital Skills
            </Text>
        </View>
        {
            isLoading ? <Loading /> : null
        }
        <Data data={data} />

            <View style={styles.container}>
                <Text style={styles.headingText}>
                    Courses in Academics for your beautiful Ward (Children)
                </Text>
            </View>
        {
            isLoading ? <Loading /> : null
        }
        <Data data={data} />

            <View style={styles.container}>
                <Text style={styles.headingText}>
                    LearnROOM for Universities
                </Text>

                <Text style={styles.normalText}>
                    Use LearnROOM to take your students and other parties.
                </Text>

                <TouchableOpacity onPress={university}>
                    <Text style={styles.normalText}>Try LearnROOM for Universities</Text>
                </TouchableOpacity>
            </View>

    </ScrollView>
    )
}

export default Home;
