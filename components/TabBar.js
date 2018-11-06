import React, { Component } from 'react';
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
    Tabs,
    Content
  } from "native-base";
import ForecastFetching from './ForecastFetching';

export default class TabBar extends Component {

  render() {
    return (
        <Container>
        
        <Tabs>
          <Tab heading="Forecast">
          
            <ForecastFetching currentCity="Phuket"/>
            
          </Tab>
          <Tab heading="Travel">
            
          </Tab>

        </Tabs>
      </Container>
    );
  }
}