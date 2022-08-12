import React from "react";
import {
    ActivityIndicator
} from 'react-native';

const Loading = () =>{
    return(
        <ActivityIndicator style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            padding: "50%"
        }}
         size="large" color="blue" 
        />
    )
}

export default Loading;
