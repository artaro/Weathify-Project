import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import WeatherFetching from "./WeatherFetching";
import Advice from "./Advice";
import ForecastFetching from "./ForecastFetching";
import MoreWeatherData from "./MoreWeatherData";
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



export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: "Phuket",
      searchText: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchText } = this.state;
    this.refs.modal3.close();
    this.setState({ currentCity: searchText });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.refs.modal2.open()} transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.currentCity}</Title>
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
            <TouchableOpacity onPress={() => this.refs.modal1.open()} style={styles.viewStyle1}>
              <WeatherFetching city={this.state.currentCity} />
            </TouchableOpacity>
            <View style={styles.viewStyle2}>
              <Advice city={this.state.currentCity} />
            </View>
          </View>
          <ForecastFetching city={this.state.currentCity} />
        </Content>
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"}
        >
          <Text style={{ fontSize: 18 }}>Search by city name</Text>
          <TextInput
            placeholder="City name"
            ref={el => (this.element = el)}
            style={styles.textInput}
            value={this.state.searchText}
            onChangeText={searchText => this.setState({ searchText })}
          />
          <View>
            <Button style={styles.btn} onPress={this.handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </Button>
          </View>
        </Modal>
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal2"}
        >
        <Text style={{ fontSize: 18 }}>Options</Text>
        <Text style={{ fontSize: 18, marginTop : 10 }}>About</Text>
        </Modal>
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal1"}
        >
        <MoreWeatherData city={this.state.currentCity}/>
        </Modal>
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
    borderRadius: 6
  },
  viewStyle2: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 106, 205, 0.7)",
    marginTop: 2,
    margin: 8,
    borderRadius: 6
  },
  modal3: {
    height: "60%",
    width: "90%",
    borderRadius: 6
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
    borderRadius: 3,
    width: 100,
    justifyContent: "center"
  },
  submitText: {
    padding: 5,
    color: "#DDDDDD",
    fontSize: 16
  }
});
