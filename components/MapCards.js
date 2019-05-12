import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  ProviderPropType,
  Callout
} from "react-native-maps";
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
import PropTypes from "prop-types";

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 15.1285;
const LONGITUDE = 100.938;
const LATITUDE_DELTA = 7;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default class MapCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: [],
      events: "lat1:'',lon1:'',lat2:'',lon2:''",
      travelWeather: {},
      n: 0
    };
    this.mixfunction = this.mixfunction.bind(this);
  }

  fetchData = (lat, lon, n) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        if (n == 0) {
          this.setState({
            travelWeather: {
              temp1: json.main.temp,
              description1: json.weather[0].description,
              poiName1: json.name,
              lon1: json.coord.lon,
              lat1: json.coord.lat
            }
          });
        } else if (n == 1) {
          this.setState({
            travelWeather: {
              ...this.state.travelWeather,
              temp2: json.main.temp,
              description2: json.weather[0].description,
              poiName2: json.name,
              lon2: json.coord.lon,
              lat2: json.coord.lat
            }
          });
        }
      })
      .catch(error => {
        console.warn("error");
      });
  };

  makeEvent(e, name) {
    return {
      id: id++,
      name,
      data: e.nativeEvent ? e.nativeEvent : e
    };
  }

  recordEvent(name) {
    return e => {
      if (e.persist) {
        e.persist(); // Avoids warnings relating to https://fb.me/react-event-pooling
      }
      this.setState(prevState => ({
        events: [
          {
            id: id++,
            name: name,
            data: "hello2"
          },
          ...prevState.events.slice(0, 10)
        ]
      }));
    };
  }

  onMapPress(e) {
    if (this.state.n == 0) {
      this.setState({
        markers: [
          ...this.state.markers,
          {
            coordinate: e.nativeEvent.coordinate,
            key: id++,
            color: randomColor()
          }
        ],
        events: {
          lat1: e.nativeEvent.coordinate.latitude,
          lon1: e.nativeEvent.coordinate.longitude
        }
      });
      this.fetchData(
        e.nativeEvent.coordinate.latitude,
        e.nativeEvent.coordinate.longitude,
        this.state.n
      );
      this.setState({ n: 1 });
    } else if (this.state.n < 2) {
      this.setState({
        markers: [
          ...this.state.markers,
          {
            coordinate: e.nativeEvent.coordinate,
            key: id++,
            color: randomColor()
          }
        ],
        events: {
          ...this.state.events,
          lat2: e.nativeEvent.coordinate.latitude,
          lon2: e.nativeEvent.coordinate.longitude
        }
      });
      this.fetchData(
        e.nativeEvent.coordinate.latitude,
        e.nativeEvent.coordinate.longitude,
        this.state.n
      );
      this.setState({ n: 2 });
    }
  }
  mixfunction(e) {
    this.onMapPress(e);
  }

  render() {
    let googleProviderProps = {};
    if (this.props.provider === PROVIDER_GOOGLE) {
      googleProviderProps = {
        onUserLocationChange: this.recordEvent("Map::onUserLocationChange")
      };
    }

    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={e => {
            this.mixfunction(e);
          }}
          {...googleProviderProps}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
              onPress={this.recordEvent("Map::onPress")}
            >
            </Marker>
          ))}
        </MapView>

        <View style={styles.eventList}>
          <Text style={styles.headText}>Starting Point</Text>
          <View>
            <View>
              <Text>Name: {this.state.travelWeather.poiName1}</Text>
              <Text>lat: {this.state.travelWeather.lat1}</Text>
              <Text>lon: {this.state.travelWeather.lon1}</Text>
            </View>
            <View>
              <Text>temp: {this.state.travelWeather.temp1} °C</Text>
              <Text>weather: {this.state.travelWeather.description1}</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventList2}>
          <Text style={styles.headText}>Destination</Text>
          <View>
            <View>
              <Text>Name: {this.state.travelWeather.poiName2}</Text>
              <Text>lat: {this.state.travelWeather.lat2}</Text>
              <Text>lon: {this.state.travelWeather.lon2}</Text>
            </View>
            <View>
              <Text>temp: {this.state.travelWeather.temp2} °C</Text>
              <Text>weather: {this.state.travelWeather.description2}</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventList3}>
          <Button
            style={styles.btn}
            onPress={() =>
              this.setState({
                markers: [],
                events: "",
                travelWeather: {},
                n: 0
              })
            }
          >
            <Text style={styles.submitText}>Reset</Text>
          </Button>
        </View>
      </View>
    );
  }
}

MapCards.propTypes = {
  provider: ProviderPropType
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
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 8
  },
  eventData: {
    fontSize: 10,
    fontFamily: "courier",
    color: "#555"
  },
  eventName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#222"
  },
  eventList: {
    top: "65%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.7)",
    paddingHorizontal: "30%",
    borderRadius: 10
  },
  eventList2: {
    top: "67%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.7)",
    paddingHorizontal: "32%",
    borderRadius: 10

  },
  eventList3: {
    top: "69%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  textTravel: {
    justifyContent: "center"
  },
  btn: {
    borderRadius: 10,
    width: 100,
    justifyContent: "center"
  },
  submitText: {
    padding: 5,
    color: "#DDDDDD",
    fontSize: 16,
    fontWeight: "bold"
  },
  headText: {
    padding: 3,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
