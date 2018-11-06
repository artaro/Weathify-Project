import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
export default class ForecastCards extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <View style={{flex: 1, flexDirection: "row"}}>
              <View>
                <Text>{this.props.hourlyForecast.date_time}</Text>
                <Text>Temperature: {this.props.hourlyForecast.temp} °C</Text>
                <Text>Humidity: {this.props.hourlyForecast.humidity} %</Text>
              </View>
              <View style={{marginLeft: 100}}>
                 <Image
                  style={{ width: 60, height: 60 }}
                  source={{
                    uri: `http://openweathermap.org/img/w/${
                      this.props.hourlyForecast.icon
                    }.png`
                  }}
                />
                <Text>{this.props.hourlyForecast.description}</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

ForecastCards.propTypes = {
  hourlyForecast: PropTypes.object
}