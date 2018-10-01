import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Weather from "./Weather";
import Advice from "./Advice";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import WeatherData from "./WeatherData";
import AdviceData from "./AdviceData";

export default class MainLayout extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Phuket</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        <View style={styles.columnLayout}>
          <View style={styles.viewStyle1}>
            <Weather currentCity="Phuket"/>
          </View>
          <View style={styles.viewStyle2}>
            <AdviceData />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    marginTop: 5,
    padding: 5
  },
  columnLayout: {
    flex: 1,
    flexDirection: "column"
  },
  viewStyle1: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'rgba(0, 60, 90, 0.5)',
    margin: 8,
    marginTop : 70,
    borderRadius: 8,
  },
  viewStyle2: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'rgba(0, 90, 50, 0.5)',
    margin: 8,
    borderRadius: 8,
  }
});
