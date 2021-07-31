import { Text, View ,Button, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import Splash from './Splash';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginForm} options={{headerLeft: false}}/>
      <Stack.Screen name="Home" component={Home} options={{
        headerLeft: false,
        headerRight: () => (
          <Button
            // onPress={() => alert('This is a button!')}
            // onPress={() => console.log('logout')}
            onPress={() => AsyncStorage.removeItem('app_token')}
            title="Logout"
            />
        ),
        }}
        />
    </Stack.Navigator>
    </NavigationContainer>

  );
}



export default MyStack;
