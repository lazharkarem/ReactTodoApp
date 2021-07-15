/**
 * @format
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React, { Component } from 'react';
import { Text, View,AppRegistry} from 'react-native';
import App from './app/App';
//import App from './app/App'
// import Header from './app/Header';

// const Todo = () => {
//     return(
//         <View>
//         <Header title='Title of the App' title2='Title2'></Header>
//         <Text>Hello world</Text>
//         </View>
//     )
// }

AppRegistry.registerComponent('ReactTodoApp', () => App);
