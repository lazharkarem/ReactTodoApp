import React, { Component } from 'react';
import { Text,View,  StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.textStyle}>
        {props.children}        
        </Text>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    button: {
        borderRadius:5,
        backgroundColor:'rgb(42,55,68)',
        justifyContent:'center',
        marginVertical:10,
        marginHorizontal:25,
        height:45,
        flex:1
    },
    textStyle:{
        //alignSelf:'center',
        textAlign:'center',
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
        paddingTop:10,
        paddingBottom:10
    }
});
export {Button} ;
