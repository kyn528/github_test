import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CreateStackNavogator } from "react-navigation-stack"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyConyent: 'center',
        backgroundColor: '#B4EEB4'
    },
    textTips: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#AFEEEE'
    },

});

class HomeScreen extends Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}
const HomeStackNavogator = CreateStackNavogator(
    {
        Home: {
            Screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
)
export default HomeStackNavogator; ƒ