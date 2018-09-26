import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import WeatherData from './WeatherData'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: '-', description: '-', temp: 0
      }
    }
  }

  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.currentCity},th&units=metric&APPID=02c712e3cbbb06046fbef6d0861ed6af`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(
          {
            forecast: {
              temp: json.main.temp,
              icon: json.weather[0].icon,
              description: json.weather[0].description,
              humidity: json.main.humidity
            }
          });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  componentDidMount = () => this.fetchData()



  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.currentCity}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='refresh' />
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          

            <WeatherData {...this.state.forecast} />
          
        </View>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    marginTop : 5,
    padding: 5,
  }

});

