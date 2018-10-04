import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Tab,
    Tabs
  } from "native-base";
import ForecastDataTab from './ForecastDataTab';
import Forecast from './Forecast';

export default class TabBar extends Component {
  

  render() {
    return (
        <Container>
        
        <Tabs>
          <Tab heading="Forecast">
            <Forecast currentCity="Phuket"/>
          </Tab>
          <Tab heading="Travel">
            
          </Tab>

        </Tabs>
      </Container>
    );
  }
}
