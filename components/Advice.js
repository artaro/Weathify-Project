import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import AdviceData from './AdviceData'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";

export default class Advice extends React.Component {


  render(){
    return(
      <View style={styles.container}>

      <AdviceData />
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop : 5,
    padding: 5,
  }

});
