import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MyStack from './Stack';
import reducers from './reducers';
export default class App extends Component {


    render() {
        return(
            <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
                <MyStack />
            </Provider>
        )
    }
}