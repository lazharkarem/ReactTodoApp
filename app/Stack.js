import React, {Component} from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import { Text, View ,StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';







const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Header" component={Header}/>
      <Stack.Screen name="LoginForm" component={LoginForm}/>
    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

// import { StackNavigator } from 'react-navigation';

// const RootNavigator = StackNavigator({
//     Home: {
//         screen: Header,
//     },
//     Login: {
//         screen: LoginForm
//     }

// });



export default MyStack;
