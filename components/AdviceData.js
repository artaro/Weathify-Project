import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class AdviceData extends React.Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.dataStyle}>

                <Text style={styles.textStyle}>
                    Advice Here
                </Text>

                </View>

            </View>



        );
    }
}

const styles = StyleSheet.create({
    dataStyle: {
        backgroundColor: '#80ced6',
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
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }

})