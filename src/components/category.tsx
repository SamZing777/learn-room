import React from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Colors} from '../theme/colors'

interface Props {
    title : string,
    onPress ? : () => void
}

const Category: React.FC <Props> = ({title, onPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor:Colors.secondary,
        marginLeft:14,
        padding:5,
        borderRadius:20,
        paddingHorizontal:15
    },
    title:{
        color:Colors.white,
        fontFamily:'Rubik-Bold'
    }
})

export default  Category