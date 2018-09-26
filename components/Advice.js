import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import AdviceData from './AdviceData'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

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
    paddingTop: 56,
    marginTop : 5,
    padding: 5,
  }

});
