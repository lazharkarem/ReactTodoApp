//import lib
import React, { Component } from 'react';
import { Text, View ,StyleSheet } from "react-native";


import Button from './common/Button';

//create comp

class Home extends Component {
constructor(){
    super();
    this.state={
        title:'Title from state'
    };
}

    _onLoginPressed(){
        console.log('Button Pressed')
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View >
                {/* <Text style={styles.text}>  */}
                {/* {this.props.children} */}
                {/* {this.props.title2} */}
                {/* {this.state.title} */}
                {/* Home App */}
                 {/* </Text> */}

                 <Button 
                 onPress = {this._onLoginPressed.bind(this)}
                 >
                 Login
                 </Button>
            </View>

        );

    }
}
    const styles = StyleSheet.create({
        header: {
            backgroundColor:'#efefef',
            height:80,
            alignItems:'center',
            justifyContent:'center',
        },
        text: {
            fontSize: 15,
            fontWeight: 'bold'
        }
    });



    //export the comp to be avaible for other comp in the apps
    export default Home;