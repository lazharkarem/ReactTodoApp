import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MyStack from './Stack';
import { NavigationContainer } from '@react-navigation/native';
import reducers from './reducers';
export default class App extends Component {
    // render() {
    //     return <MyStack />
    // }


    render() {
        return(
            <Provider store={createStore(reducers)}>
                 <MyStack />
            </Provider>
        )
    }
}