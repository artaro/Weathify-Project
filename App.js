import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Weather from './components/Weather';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Advice from './components/Advice';
import MainLayout from './components/MainLayout';

export default class App extends Component {
  
  render() {
    return (
      
      <View>
        <MainLayout />
      </View>
    );
  }
}


