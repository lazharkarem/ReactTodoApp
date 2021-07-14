//import lib
import React, { Component } from 'react';
import { Text, View ,StyleSheet } from "react-native";


//create comp

class Header extends Component {
constructor(){
    super();
    this.state={
        title:'Title from state'
    };
}

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}> 
                {/* {this.props.children} */}
                {/* {this.props.title2} */}
                Header APP
                 </Text>
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
    export default Header;