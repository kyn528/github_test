/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDAB9',
    },
    textTips: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8EE5EE',
    },
});

class Welcome extends Component {
render() {
    return (
        <view style={styles.container}>
        <text style={styles.textTips} >歌曲大赏</text>
      </view>
    );
    }
}

//StackNavigator:一次只渲染一个页面，并提供页面之间的跳转方法，当打开一个新的页面时，它被放置在堆栈顶部
const WelcomeStackNavigator=createStackNavigator();
