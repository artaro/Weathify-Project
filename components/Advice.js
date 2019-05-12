import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AdviceData from "./AdviceData";
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
import { advicecondition } from "./functions/AdviceCondition";

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";

export default class Advice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adviceId: {}
    };
  }

  fetchData = q => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q},th&units=metric&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          adviceId: {
            id: json.weather[0].id
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };

  componentDidMount = () => this.fetchData(this.props.city);
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dataStyle}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../src/img/outdoor-advice-icon.png")}
              style={styles.iconStyle}
            />
            <Text style={styles.textStyle}>[outdoor activities]</Text>
            <Text style={styles.textStyle}>{advicecondition(this.state.adviceId.id)}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../src/img/travel-advice-icon.png")}
              style={styles.iconStyle}
            />
            <Text style={styles.textStyle}>[travel]</Text>
            <Text style={styles.textStyle}>{advicecondition(this.state.adviceId.id)}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../src/img/umbrella-advice-icon.png")}
              style={styles.iconStyle}
            />
            <Text style={styles.textStyle}>[chance of rain]</Text>
            <Text style={styles.textStyle}> 71 %</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    padding: 5
  },

  dataStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  viewStyle: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    margin: 5
  },
  iconStyle: {
    width: 70,
    height: 70
  }
});
