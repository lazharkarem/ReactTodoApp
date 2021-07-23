import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';









const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginForm}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}



export default MyStack;
