import React from 'react';
import {Alert} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {

  state = {
    isLoading: false,
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

    } catch (error) {
      Alert.alert("Can't find you.", "So sad :( ");
    }
  }

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }

}

const styles = StyleSheet.create({

});
