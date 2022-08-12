import React from 'react';
import account from '../styles/account';

import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


const Account = () =>{
    return(
    <ScrollView>
        <View style={account.container}>
            <Image source={require('../images/user.png')} style={{ width: 200, height: 200 }}/>
            <Text style={{color: "black", fontSize: 20}}>
                Olivia Gerard
            </Text>
            <Text style={{color: "black", fontSize: 14}}>
                oliviagerard@gmail.com
            </Text>
        </View>

        <View style={account.container}>
            <TouchableOpacity>
                <Text style={{color: "black"}}>
                    Instructor's corner
                </Text>
            </TouchableOpacity>            
        </View>

        <View style={account.containerLeft}>
            <Text style={{color: "gray"}}>Account information</Text>
            <TouchableOpacity>
                <Text style={{color: "black"}}>
                    Account security
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color: "black"}}>
                    Email
                </Text>
            </TouchableOpacity>
        </View>

        <View style={account.containerLeft}>
            <Text style={{color: "gray"}}>Help and Support</Text>
            <TouchableOpacity>
                <Text style={{color: "black"}}>
                    Share
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color: "black"}}>
                    LearnROOM for Universities
                </Text>
            </TouchableOpacity>
        </View>

        <View style={account.container}>
            <TouchableOpacity>
                <Text style={{color: "rgb(150, 50, 50)", marginTop: 20}}>
                    Log out
                </Text>
            </TouchableOpacity>            
        </View>
    </ScrollView>
    )
}

export default Account;
