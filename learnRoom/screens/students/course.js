import React from 'react';
import {
    ScrollView,
    Image,
    View,
    Text,
    Alert,
    Pressable
} from 'react-native';

import styles from '../../styles/styles';


const Course = ({route}) =>{

    const {
         title,
         instructor,
         short_note,
         language,
         description,
         price,
         img
    } = route.params;

    const proceedToCheckOut = () =>{
        Alert.alert("This button will proceed to check out");
    }

    const addToCart = () =>{
        Alert.alert("This button will add to cart");
    }

    const addToWishlist = () =>{
        Alert.alert("This button will add to wish list");
    }

    const moreSections = () =>{
        Alert.alert("This button will open more sections");
    }

    const moreReviews = () =>{
        Alert.alert("This button will open more reviews");
    }

    return(
    <ScrollView>
        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                {title}
            </Text>
            <Image style={{
                width: 360,
                height: 360,
                justifyContent: "center"
            }}
             source={{uri: img}} />
            <Text style={styles.normalText}>
               {short_note}
            </Text>
            <Text style={styles.smallText}>
                (20,250 ratings) 95,020 students
            </Text>
        </View>
        
        <View style={styles.container}>
            <Text style={styles.normalText}>
                Preview this course | video
            </Text>
        </View>
        
        <View style={styles.containerLeft}>
            <Text style={styles.normalText}>
                Created by {instructor}
            </Text>
            <Text style={styles.normalText}>
                Last updated 04/2022
            </Text>
            <Text style={styles.smallText}>
                Available in: {language}
            </Text> 
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                 {price}
            </Text>
            <Pressable style={{ backgroundColor: "gray", borderRadius: 2}}
            onPress={proceedToCheckOut}>
                <Text style={styles.btnText}>
                    Buy now 
                </Text>
            </Pressable>
        </View>

        <View style={styles.row}>
            <Pressable style={{ borderRadius: 2, borderWidth: 2, borderColor: "gray"}}
                onPress={addToCart}>
                    <Text style={styles.featureText}>
                        Add to cart
                    </Text>
            </Pressable>
            <Pressable style={{ borderRadius: 2, borderWidth: 2, borderColor: "gray"}}
                onPress={addToWishlist}>
                    <Text style={styles.featureText}>
                        Add to wishlist
                    </Text>
            </Pressable>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                What you'll learn
            </Text>
            <Text style={styles.normalText}>
                From fundamentals to expert, learn about every major python topic, working with python 3.
            </Text>
            <Text style={styles.normalText}>
                Write professional-grade Pythonic code with all the best practices and avoiding common pitfalls.  
            </Text>
            <Text style={styles.normalText}>
                From fundamentals to expert, learn about every major python topic, working with python 3.
            </Text>
            <Text style={styles.normalText}>
                Write professional-grade Pythonic code with all the best practices and avoiding common pitfalls.  
            </Text>
            <Text style={styles.normalText}>
                From fundamentals to expert, learn about every major python topic, working with python 3.
            </Text>
            <Text style={styles.normalText}>
                Write professional-grade Pythonic code with all the best practices and avoiding common pitfalls.  
            </Text>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                Curriculum
            </Text>
            <Text style={styles.smallText}>
                24 Sections, 280 lessons, 28 hours total length
            </Text>

            <View>
                <Text style={styles.normalText}>
                    Section 1 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 2 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 3 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 4 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
            <Text style={styles.normalText}>
                    Section 5 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 6 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 7 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 8 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 1 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 2 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 3 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 4 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
            <Text style={styles.normalText}>
                    Section 9 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 10 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Text style={styles.normalText}>
                    Section 11 - Intro to Python
                </Text>

                <Text style={styles.normalText}>
                    1 Welcome to this course
                </Text>

                <Text style={styles.normalText}>
                    2 Python fundamentals
                </Text>

                <Text style={styles.normalText}>
                    3 Milestone project
                </Text>

                <Text style={styles.normalText}>
                    4 Object oriented programming
                </Text>

                <Text style={styles.normalText}>
                    5 Files in Python
                </Text>
            </View>

            <View>
                <Pressable style={{ borderRadius: 2, borderWidth: 2, borderColor: "gray"}}
                    onPress={moreSections}>
                        <Text style={styles.featureText}>
                            12 more sections
                        </Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                This course includes
            </Text>
            <Text style={styles.normalText}>
                28 hours of video
            </Text>
            <Text style={styles.normalText}>
                Learning files
            </Text>
            <Text style={styles.normalText}>
                28 articles
            </Text>
            <Text style={styles.normalText}>
                Assessments
            </Text>
            <Text style={styles.normalText}>
                Projects
            </Text>
            <Text style={styles.normalText}>
                Full time access
            </Text>
            <Text style={styles.normalText}>
                Access anywhere
            </Text>
            <Text style={styles.normalText}>
                Certificate on completion
            </Text>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                Requirements
            </Text>
            <Text style={styles.normalText}>
                Access to a computer devices with internet connection
            </Text>
            <Text style={styles.normalText}>
                Enthusiasm
            </Text>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                Description
            </Text>
            <Text style={styles.normalText}>
                {description}
            </Text>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                Instructor(s)
            </Text>
            <Text style={styles.featureText}>
                John Purcell
            </Text>
            <Text style={styles.normalText}>
                Teaching the next generation of coders
            </Text>
            <Text style={styles.normalText}>
                Something about this Instructor. If you want to master Python
                and write efficient, elegant and simple code, this course is for you.
                Grab it! Learn python from a software developer. If you want to master Python
                and write efficient, elegant and simple code, this course is for you.
                Grab it! Learn python from a software developer. If you want to master Python
                and write efficient, elegant and simple code, this course is for you.
                Grab it! Learn python from a software developer. If you want to master Python
                and write efficient, elegant and simple code, this course is for you.
                Grab it!
            </Text>
        </View>

        <View style={styles.container}>
            <Pressable style={{ borderRadius: 2, borderWidth: 2, borderColor: "gray"}}
                onPress={moreSections}>
                    <Text style={styles.featureText}>
                        View Profile
                    </Text>
            </Pressable>
        </View>

        <View style={styles.containerLeft}>
            <Text style={styles.headingText}>
                Student Feedback
            </Text>
            <View>
                <Text style={styles.featureText}>
                    Joe Benson
                    <Text style={styles.smallText}>
                        2 weeks ago
                    </Text>
                </Text>
                
                <Text style={styles.normalText}>
                    Excellent course! I've learnt a lot of things. John really knows how 
                    things work in Python and he is very clear aat explaining how it works.
                    Excellent course! I've learnt a lot of things. John really knows how 
                    things work in Python and he is very clear aat explaining how it works.
                </Text>
            </View>

            <View>
                <Text style={styles.featureText}>
                    Joe Benson
                    <Text style={styles.smallText}>
                        2 weeks ago
                    </Text>
                </Text>
                
                <Text style={styles.normalText}>
                    Excellent course! I've learnt a lot of things. John really knows how 
                    things work in Python and he is very clear aat explaining how it works.
                    Excellent course! I've learnt a lot of things. John really knows how 
                    things work in Python and he is very clear aat explaining how it works.
                </Text>
            </View>
        </View>

        <View style={styles.container}>
            <Pressable style={{ borderRadius: 2, borderWidth: 2, borderColor: "gray"}}
                onPress={moreReviews}>
                    <Text style={styles.featureText}>
                        More Reviews
                    </Text>
            </Pressable>
        </View>
    </ScrollView>
    )
}

export default Course;
