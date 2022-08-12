import React from 'react';
import{
    TouchableOpacity,
    View,
    Text
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles';


const CategoryCard = ({category}) =>{
    // const navigation = useNavigation();

    return(
        <TouchableOpacity>
            <View style={styles.feature}>
                <Text style={styles.featureText}> {category} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard;
