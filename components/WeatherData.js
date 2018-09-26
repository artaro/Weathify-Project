import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class WeatherData extends React.Component {
    render() {
        return (


            <View style={styles.viewStyle}>


                <View style={styles.dataStyle}>
                    <Text style={styles.textStyle}>Temperature</Text>
                    <Text style={styles.textStyle}>{this.props.temp} °C</Text>

                </View>
                <View style={styles.dataStyle}>
                    <Image style={{ width: 80, height: 80 }} source={{ uri: `http://openweathermap.org/img/w/${this.props.icon}.png` }}></Image>
                    <Text style={styles.textStyle}>{this.props.description}</Text>
                </View>
                <View style={styles.dataStyle}>
                    <Text style={styles.textStyle}>Humidity</Text>
                    <Text style={styles.textStyle}>{this.props.humidity} %</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    dataStyle: {
        backgroundColor: '#00b377',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },

    viewStyle: {
        height: 150,
        flexDirection: "row",
        justifyContent: "center"

    },
    textStyle: {
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
         textShadowOffset: {width: -1, height: 1},
         textShadowRadius: 10
    }

})