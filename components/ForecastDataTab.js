import React, { Component } from "react";
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
import ForecastData from "./ForecastData";
export default class ForecastDataTab extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <View style={{flex: 1, flexDirection: "row"}}>
                  <View>
                    <Text>{this.props.date_time}</Text>
                    <Text>Temperature: {this.props.temp} °C</Text>
                    <Text>Humidity: {this.props.humidity} %</Text>
                  </View>
                  <View style={{marginLeft: 100}}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={{
                        uri: `http://openweathermap.org/img/w/${
                          this.props.icon
                        }.png`
                      }}
                    />
                    <Text>{this.props.description}</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Forecast 1</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Forecast 2</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
