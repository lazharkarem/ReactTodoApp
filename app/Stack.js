import React, {Component} from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import { Text, View ,StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const HomeScreen=  ()=> {
  return (
    <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}> 
    <Text>Home Screen</Text>
    </View>
    );
};
const HeaderScreen=  ()=> {
  return (
    <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}> 
    {/* <Text>Home Screen</Text> */}
      <Header></Header>    
    </View>
    );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Header" component={HeaderScreen} />
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
