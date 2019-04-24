import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import ForecastCards from "./ForecastCards";
import MapCards from "./MapCards";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Tab,
  Tabs
} from "native-base";

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";

export default class ForecastFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourlyForecast1: {},
      hourlyForecast2: {},
      hourlyForecast3: {},
      hourlyForecast4: {},
      hourlyForecast5: {},
      hourlyForecast6: {},
      hourlyForecast7: {},
      hourlyForecast8: {}
    };
  }

  fetchData = q => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${q}&units=metric&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          hourlyForecast1: {
            temp: json.list[0].main.temp,
            humidity: json.list[0].main.humidity,
            icon: json.list[0].weather[0].icon,
            description: json.list[0].weather[0].description,
            date_time: json.list[0].dt_txt
          },
          hourlyForecast2: {
            temp: json.list[1].main.temp,
            humidity: json.list[1].main.humidity,
            icon: json.list[1].weather[0].icon,
            description: json.list[1].weather[0].description,
            date_time: json.list[1].dt_txt
          },
          hourlyForecast3: {
            temp: json.list[2].main.temp,
            humidity: json.list[2].main.humidity,
            icon: json.list[2].weather[0].icon,
            description: json.list[2].weather[0].description,
            date_time: json.list[2].dt_txt
          },
          hourlyForecast4: {
            temp: json.list[3].main.temp,
            humidity: json.list[3].main.humidity,
            icon: json.list[3].weather[0].icon,
            description: json.list[3].weather[0].description,
            date_time: json.list[3].dt_txt
          },
          hourlyForecast5: {
            temp: json.list[4].main.temp,
            humidity: json.list[4].main.humidity,
            icon: json.list[4].weather[0].icon,
            description: json.list[4].weather[0].description,
            date_time: json.list[4].dt_txt
          },
          hourlyForecast6: {
            temp: json.list[5].main.temp,
            humidity: json.list[5].main.humidity,
            icon: json.list[5].weather[0].icon,
            description: json.list[5].weather[0].description,
            date_time: json.list[5].dt_txt
          },
          hourlyForecast7: {
            temp: json.list[6].main.temp,
            humidity: json.list[6].main.humidity,
            icon: json.list[6].weather[0].icon,
            description: json.list[6].weather[0].description,
            date_time: json.list[6].dt_txt
          },
          hourlyForecast8: {
            temp: json.list[7].main.temp,
            humidity: json.list[7].main.humidity,
            icon: json.list[7].weather[0].icon,
            description: json.list[7].weather[0].description,
            date_time: json.list[7].dt_txt
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
      <ScrollView>
        <View>
          <Tabs>
            <Tab heading="Forecast">
              <Content>
                <ForecastCards hourlyForecast={this.state.hourlyForecast1} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast2} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast3} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast4} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast5} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast6} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast7} />
                <ForecastCards hourlyForecast={this.state.hourlyForecast8} />
              </Content>
            </Tab>
            <Tab heading="Travel">
              <MapCards/>
            </Tab>
          </Tabs>
        </View>
      </ScrollView>
    );
  }
}
