import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Weather from './components/Weather';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Advice from './components/Advice';

export default class App extends Component {
  
  render() {
    return (
      
      <View style={styles.columnLayout}>
        <Weather currentCity="Phuket"/>
        <Advice />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  columnLayout : {
    flex : 1,
    flexDirection: 'column',
  }
})
