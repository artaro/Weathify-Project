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

export default class AdviceData extends React.Component {
  render() {
    return (
      <View style={styles.dataStyle}>
        <View style={{alignItems : 'center'}}>
          <Image
            source={require("../src/img/outdoor-advice-icon.png")}
            style={styles.iconStyle}
          />
          <Text style={styles.textStyle}>[outdoor activities]</Text>
          <Text style={styles.textStyle}>Good</Text>
        </View>
        <View style={{alignItems : 'center'}}>
          <Image
            source={require("../src/img/travel-advice-icon.png")}
            style={styles.iconStyle}
          />
          <Text style={styles.textStyle}>[travel]</Text>
          <Text style={styles.textStyle}>Good</Text>
        </View>
        <View style={{alignItems : 'center'}}>
          <Image
            source={require("../src/img/umbrella-advice-icon.png")}
            style={styles.iconStyle}
          />
          <Text style={styles.textStyle}>[chance of rain]</Text>
          <Text style={styles.textStyle}> 43 %</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  viewStyle: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    margin: 5
  },
  iconStyle: {
    width: 70,
    height: 70
  }
});
