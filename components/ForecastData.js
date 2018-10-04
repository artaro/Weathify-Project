import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class ForecastData extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.date_time}</Text>
          <Text>Temperature: {this.props.temp} °C</Text>
          <Text>Humidity: {this.props.humidity}</Text>
        </View>
        <View>
          <Image
            style={{ width: 60, height: 60 }}
            source={{
              uri: `http://openweathermap.org/img/w/${this.props.icon}.png`
            }}
          />
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}
