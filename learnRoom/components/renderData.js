import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    TouchableOpacity,
    View,
    Image,
    Text,
    FlatList
} from 'react-native';

import styles from '../styles/styles';

const Data = ({data}) =>{

    const navigation = useNavigation();

    const coursePage = (item) =>{
        navigation.navigate("Course", {
            title: item.title,
            instructor: item.instructor,
            language: item.language,
            short_note: item.short_note,
            description: item.description,
            price: item.price,
            img: item.thumb_nail
        });
    }
    
    const renderData = ({item}) =>(
        <TouchableOpacity onPress={() =>coursePage(item)}
        style={styles.row}>
            <View  style={styles.container}>
                <Image source={{uri: item.thumb_nail}}
                style={styles.imageScroll}/>
                <Text style={styles.normalText}>
                    {item.title}
                </Text>
                <Text style={styles.normalText}>
                    {item.instructor}
                </Text>
                <Text style={styles.normalText}>
                    {item.language}
                </Text>
            </View>
        </TouchableOpacity>
        )

    return(
        <FlatList horizontal
            data={data}
            renderItem={renderData}
            textColor={styles.contentText}
            initialNumToRender={10}
        />
    )
}

export default Data;
