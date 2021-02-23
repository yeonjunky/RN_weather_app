import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Haze',
        subTitle: "Just don't go outside.",
    },
    Thunderstorm:{
        iconName: 'weather-lightning',
        gradient: ['#373B44', '#4286f4']
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF']
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005BEA']
    },  
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FF7300', '#FEF253']
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38']
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38']
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF']
    },
    Clouds:{
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352']
    },
};

export default function Weather({ temp, condition }) {
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar style="light"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
            name= {weatherOptions[condition].iconName}
            size={96}
            color='white'
            />
            <Text style={styles.temp}>{temp}o</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>

            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>

        </View>

    </LinearGradient>
    );
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Clear',
        "Atmosphere",
        'Clouds',
        'Haze',
        'Mist',
        'Dust',
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 36,
        color: 'white'
    },
    title: {
        fontSize: 44,
        color: 'white',
        fontWeight: '300',
        marginBottom: 10,

    },
    subTitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: '600',

    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
    
});