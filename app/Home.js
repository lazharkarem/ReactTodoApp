import React, { Component } from 'react';
import { Text, View ,StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import Button from './common/Button';

class Home extends Component {


    static options = ({ navigation})=> {
        const { params = {} }= navigation.state;
        const headerRight = (
            <TouchableOpacity onPress={params.logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        );

        return {headerRight};
    };



    componentDidMount() {
        this.props.navigation.setParams({ logout: this._logout});
    }
    _logout(){
        console.log('logout');
    }

    render(){
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    }
}


export default Home;