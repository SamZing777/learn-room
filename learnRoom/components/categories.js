import React from "react";
import {
    ScrollView,
    View,
    Text
} from 'react-native';

import CategoryCard from "./card";
import styles from "../styles/styles";

const Categories = () =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={{color: "black", fontSize: 24}}> Categories </Text>
            </View>
            <View style={styles.category}>
                <CategoryCard category="Academics" />
                <CategoryCard category="Digital" />
                <CategoryCard category="Financial" />
                <CategoryCard category="Linguistic" />
                <CategoryCard category="Master class" />
                <CategoryCard category="Professional" />
                <CategoryCard category="Soft skills" />
            </View>
    </ScrollView>
    )
}

export default Categories;
