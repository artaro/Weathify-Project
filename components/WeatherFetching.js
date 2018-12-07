import React from "react";
import WeatherData from "./WeatherData";

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";

export default class WeatherFetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {}
    };
  }

  fetchData = q => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q},th&units=metric&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          currentWeather: {
            temp: json.main.temp,
            icon: json.weather[0].icon,
            description: json.weather[0].description,
            humidity: json.main.humidity,
            datetime: json.dt
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
    return <WeatherData {...this.state.currentWeather} />;
  }
}
