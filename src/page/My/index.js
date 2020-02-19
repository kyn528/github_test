mport React， { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
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
class My extends Component {
    render() {
        return (
            <View>
                <Text> My </Text>
            </View>
        );
    }
}

const MyStackNavigator = createStackNavigator(
    {
        My: {
            screen: My
        }
    },
    {
        initialRouteName: 'My',
    },
);

export default MyStackNavigator;