import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {

    _logout(){

        AsyncStorage.removeItem('app_token');

        this.props.navigation.navigate('Login');


    }

    render(){
        return (
            <View>
                <Text>Home Screen</Text>

                <TouchableOpacity onPress={this._logout.bind(this)}>
                <Text>Logout</Text>
            </TouchableOpacity>
            </View>
        );
    }
}


export default Home;