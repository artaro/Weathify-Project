import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content
} from "native-base";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  btn: {
    borderRadius: 10,
    width: 100,
    justifyContent: "center"
  }
});

export default class MapCards extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: 7.89059,
              longitude: 98.3981,
              latitudeDelta: 0.025,
              longitudeDelta: 0.0221
            }}
          />
        </View>
        <View>
          <Button style={styles.btn}>
            <Text>Beginning</Text>
          </Button>
          <Button style={styles.btn}>
            <Text>Destination</Text>
          </Button>
          <Button style={styles.btn}>
            <Text>Start</Text>
          </Button>
        </View>
      </View>
    );
  }
}
