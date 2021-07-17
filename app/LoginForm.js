//import lib
import React, { Component } from 'react';
import { Text, View  } from "react-native";
import {Button, Card, CardItem,Input,Spinner }from './common';

import {connect} from 'react-redux';
import {loginUser} from './actions';




//create comp

class LoginForm extends Component {
constructor(){
    super();
    this.state={
        username: '',
        password: ''
    };
}
_onLoginPressed(){
    // console.log(`User Name is : ${this.state.username} and Password is ${this.state.password}`)
    const {username,password} = this.state;
    this.props.loginUser({username,password});
}
    _renderButton(){
        if(this.props.loading){
            return <Spinner />;
        }
        return (
            <Button onPress={this._onLoginPressed.bind(this)} >Login</Button>
        );
    }
    render() {
        return (
            <Card>
            <CardItem>
            <Input
            label='Email'
            placeholder='Enter your email'
            secureTextEntry={false}
            onChangeText={(username)=>this.setState({username})}
            />
            </CardItem>

            <CardItem>
            <Input
            label='Password'
            placeholder='Enter your passowrd'
            secureTextEntry={true}
            onChangeText={(password)=>this.setState({password})}

            />
            </CardItem>

                <CardItem>
                { this._renderButton()}
                </CardItem>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        error:state.auth.error,
        loading:state.auth.loading,
        user:state.auth.user

    }
}
    //export the comp to be avaible for other comp in the apps
    export default connect(mapStateToProps,{loginUser})(LoginForm);