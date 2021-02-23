import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Loading extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Getting the weather...</Text>
                <StatusBar style='dark'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    },
})