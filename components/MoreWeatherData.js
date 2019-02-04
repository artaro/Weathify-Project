import React, { Component } from "react";
import { Text, View } from "react-native";
import {heatindexcal} from "./functions/HeatIndexCal";

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";

export default class MoreWeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreWeather: {}
    };
  }

  fetchData = q => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q},th&units=metric&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          moreWeather: {
            temp: json.main.temp,
            tempMin: json.main.temp_min,
            tempMax: json.main.temp_max,
            icon: json.weather[0].icon,
            description: json.weather[0].description,
            humidity: json.main.humidity,
            datetime: json.dt,
            wind: json.wind.speed,
            pressure: json.main.pressure,
            sunrise: json.sys.sunrise,
            sunset: json.sys.sunset
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };

  componentDidMount = () => this.fetchData(this.props.city);
  componentWillReceiveProps = nextProps => this.fetchData(nextProps.city);

  render() {
    return (
      <View>
        <Text style={{ fontSize: 26, color: "#000000", marginBottom: 15 }}>
          Weather Details
        </Text>
        <Text style={{ fontSize: 16 }}>
          Temperature : {this.state.moreWeather.temp} °C
        </Text>
        <Text style={{ fontSize: 16 }}>
          Feels like : {heatindexcal(this.state.moreWeather.temp,this.state.moreWeather.humidity)} °C
        </Text>
        <Text style={{ fontSize: 16 }}>
          Temperature Min: {this.state.moreWeather.tempMin} °C
        </Text>
        <Text style={{ fontSize: 16 }}>
          Temperature Max: {this.state.moreWeather.tempMax} °C
        </Text>
        <Text style={{ fontSize: 16 }}>
          Description: {this.state.moreWeather.description}
        </Text>
        <Text style={{ fontSize: 16 }}>
          Humidity: {this.state.moreWeather.humidity} %
        </Text>
        <Text style={{ fontSize: 16 }}>
          Wind speed: {this.state.moreWeather.wind} m/s
        </Text>
        <Text style={{ fontSize: 16 }}>
          Pressure: {this.state.moreWeather.pressure}
        </Text>
        <Text style={{ fontSize: 16 }}>
          Sunrise: {this.state.moreWeather.sunrise}
        </Text>
        <Text style={{ fontSize: 16 }}>
          Sunset: {this.state.moreWeather.sunset}
        </Text>
      </View>
    );
  }
}
