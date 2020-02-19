/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

//开机之后欢迎界面

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

//开机进入欢迎页面1s后跳转至首页
class WelcomeScreen extends Component {
    componentDidMount() {
        //应用中的每个页面组件会自动提供this.props.navigation ，可以获取到一些方法
        setTimeout(() => { this.props.navigation.navigate('Home') }, 1000);
    }

    render() {
        return (
            <Vew style={styles.container}>
                <Text style={styles.textTips} >音乐的力量</Text>
            </Vew>
        );

    }
}

//StackNavigator:一次只渲染一个页面，并提供页面之间的跳转方法，当打开一个新的页面时，它被放置在堆栈顶部
//StackNavigator :屏幕上方导航栏
const WelcomeStackNavigator = createStackNavigator(
    {
        Welcome: {
            Screen: WelcomeScreen,
            navigationOptions: {
                header: null  //无标题栏
            }
        }
    },
    {
        initialRouteName:'Welcome'
    }
);

export default WelcomeStackNavigator;