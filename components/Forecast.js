import React, { Component } from "react";
import { View, Text } from "react-native";
import ForecastDataTab from "./ForecastDataTab";

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourlyForecast: {}
    };
  }

  fetchData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.props.currentCity
      }&units=metric&appid=02c712e3cbbb06046fbef6d0861ed6af`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          hourlyForecast: {
            temp: json.list[0].main.temp,
            humidity: json.list[0].main.humidity,
            icon: json.list[0].weather[0].icon,
            description: json.list[0].weather[0].description,
            date_time: json.list[0].dt_txt
            
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };

  componentDidMount = () => this.fetchData();

  render() {
    return (
      <ForecastDataTab {...this.state.hourlyForecast}/>
    );
  }
}
