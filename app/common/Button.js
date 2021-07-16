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
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#007Aff',
        borderWidth: 1,
        borderRadius:5,
        backgroundColor:'#fff',
        alignSelf:'stretch',
    },
    textStyle:{
        alignSelf:'center',
        color:'#007Aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }
});

export default Button;