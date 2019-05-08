import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker, ProviderPropType, Callout } from "react-native-maps";
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
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 7.89059;
const LONGITUDE = 98.3981;
const LATITUDE_DELTA = 0.025;
const LONGITUDE_DELTA = LATITUDE_DELTA*ASPECT_RATIO;
let id = 0;

class Event extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.event.id !== nextProps.event.id;
  }

  render() {
    const { event } = this.props;
    return (
      <View style={styles.event}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventData}>{JSON.stringify(event.data, null, 2)}</Text>
      </View>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object,
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


export default class MapCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
      events: []
    };
  }

  makeEvent(e, name) {
    return {
      id: id++,
      name,
      data: e.nativeEvent ? e.nativeEvent : e,
    };
  }

  recordEvent(name) {
    return e => {
      if (e.persist) {
        e.persist();  // Avoids warnings relating to https://fb.me/react-event-pooling
      }
      this.setState(prevState => ({
        events: [
          this.makeEvent(e, name),
          ...prevState.events.slice(0, 10),
        ],
      }));
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }

  render() {
    let googleProviderProps = {};
    if (this.props.provider === PROVIDER_GOOGLE) {
      googleProviderProps = {
        onUserLocationChange: this.recordEvent('Map::onUserLocationChange'),
      };
    }
    return (
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={this.state.region}
            onPress={(e) => {this.onMapPress(e)}}
            onRegionChange={this.recordEvent('Map::onRegionChange')}
            onRegionChangeComplete={this.recordEvent('Map::onRegionChangeComplete')}
            {...googleProviderProps}
          >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            >
            <Callout
              style={styles.callout}
              onPress={this.recordEvent('Callout::onPress')}
            >
              <View>
              <Text>
                test
              </Text>
              
              </View>
            </Callout>
            </Marker>
          ))}
          </MapView>
        
        <View style={styles.eventList}>
          <ScrollView>
            {this.state.events.map(event => <Event key={event.id} event={event} />)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

MapCards.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 550,
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
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
  },
  eventData: {
    fontSize: 10,
    fontFamily: 'courier',
    color: '#555',
  },
  eventName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },
  eventList: {
    top: height / 2,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 250
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
});