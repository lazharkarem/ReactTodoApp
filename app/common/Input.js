import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';


const Input=(props) =>{
    return(
        <View style={styles.inputContainer}>
        <Text style={styles.label} >{props.label} </Text>
        <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={props.onChangeText}
        style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        height:40
    },
    label:{
        fontSize:16,
        paddingLeft:20,
        flex:1
    },
    input:{
        fontSize:16,
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        flex:2
    }
    });

export {Input};