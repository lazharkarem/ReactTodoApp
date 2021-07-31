import React, { Component } from 'react';
import { Text, View ,StyleSheet, ActivityIndicator, Image } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

const IMG_SRC= require ('./res/splash.jpg');

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(42,55,68)',
    },
    loadingText: {
        color:'#fff',
        fontSize: 20,
        paddingTop:10,
    },
    image : {
        width:150,
        height:150,
        marginBottom:20
    }
});



class Splash extends Component {

    componentDidMount() {
        AsyncStorage.getItem('app_token')
        .then(token => {
            if (token) {
                this.props.navigation.navigate('Home');
            }else {
                this.props.navigation.navigate('Login');
            }
        });
    }

    render(){
        return (
            <View style={styles.container} >
                <Image source={IMG_SRC} style={styles.image}/>
                <ActivityIndicator size={'small'}/>
                <Text style={styles.loadingText}>Loading ...</Text>
            </View>
        );
    }
}


export default Splash;