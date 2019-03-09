import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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

import {heatindexcal} from "./functions/HeatIndexCal";


export default class WeatherData extends React.Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.dataStyle}>
          <Text style={styles.textStyle}>Temperature </Text>
          <Text style={styles.textStyle}>{this.props.temp} °C</Text>
        </View>
        <View style={styles.dataStyle}>
         
          <Image
            style={{ width: 135, height: 100 }}
            source={{
              uri: `http://openweathermap.org/img/w/${this.props.icon}.png`
            }}
          />
          <Text style={styles.textStyle}>{this.props.description}</Text>
        </View>
        <View style={styles.dataStyle}>
          <Text style={styles.textStyle}>Feels like</Text>
          <Text style={styles.textStyle}>{heatindexcal(this.props.temp,this.props.humidity)} °C</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: "bold"
  },
  descriptionStyle: {
    color: "white"
  },
  viewStyle: {
    flex: 1,
    flexDirection: "row"
  }
});
