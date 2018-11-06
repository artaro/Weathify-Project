import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import WeatherFetching from "./WeatherFetching";
import Modal from "react-native-modalbox";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content
} from "native-base";
import AdviceData from "./AdviceData";
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
            <Button onPress={() => this.refs.modal3.open()} transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        {/*===============BODY===============*/}
        <Content>
          <View style={styles.columnLayout}>
            <View style={styles.viewStyle1}>
              <WeatherFetching currentCity="Phuket" />
            </View>
            <View style={styles.viewStyle2}>
              <AdviceData />
            </View>
            <Modal
              style={[styles.modal, styles.modal3]}
              position={"center"}
              ref={"modal3"}
            >
              <Text>Explore weather by city name </Text>
              <TextInput placeholder="City name" style={styles.textInput} />
              <View>
                <Button style={styles.btn}>
                  <Text style={styles.submitText}>Submit</Text>
                </Button>
              </View>
            </Modal>
          </View>
          <TabBar />
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
    backgroundColor: "rgba(0, 106, 205, 0.7)",
    margin: 8,
    marginTop: 12,
    borderRadius: 8,
  },
  viewStyle2: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 106, 205, 0.7)",
    marginTop: 2,
    margin: 8,
    borderRadius: 8
  },
  modal3: {
    height: 300,
    width: 300
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    padding: 4,
    fontSize: 18,
    height: 30,
    width: "80%",
    borderColor: "#DDDDDD",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  btn: {
    borderRadius: 3
  },
  submitText: {
    padding: 5,
    color: "#DDDDDD"
  }
});