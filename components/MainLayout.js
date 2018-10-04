import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Alert,TextInput } from "react-native";

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
  Title,
  Tab,
  Tabs,
  Content
} from "native-base";
import WeatherData from "./WeatherData";
import AdviceData from "./AdviceData";
import ForecastDataTab from "./ForecastDataTab";
import TabBar from "./TabBar";

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
            <Button onPress = {() =>{
              Alert.alert('Change city !')
            }} transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
    {/*===============BODY========================*/}
        <Content>
          
          <View style={styles.columnLayout}>
            <View style={styles.viewStyle1}>
              <Weather currentCity="Phuket" />
            </View>
            <View style={styles.viewStyle2}>
              <AdviceData />
            </View>
          </View>
          <TabBar/>

        </Content>
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
    backgroundColor: "rgba(0, 60, 90, 0.5)",
    margin: 8,
    marginTop: 12,
    borderRadius: 8
  },
  viewStyle2: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 90, 50, 0.5)",
    margin: 8,
    borderRadius: 8
  }
});
