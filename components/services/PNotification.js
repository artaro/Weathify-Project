
import React, { Component } from 'react';
import { Picker, AppState, View, Button, Text, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushController from './PushController'; //The push controller created earlier
import DateTimePicker from "react-native-modal-datetime-picker";

const API_KEY = "02c712e3cbbb06046fbef6d0861ed6af";

export default class PNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifyWeather: {},
      isDateTimePickerVisible: false,
      selectedWeather: "",
      dateP2: ""
    };
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({dateP2:date})
    this.fetchData(this.props.city);
    console.log("A date has been picked: ", date);
    console.log("dateNow : ", new Date(Date.now()))
    if(new Date(Date.now())=== date&&this.notifyWeather.id==this.selectedWeather){
      this.handleAppStateChange('background');
    }else if(new Date(Date.now())=== date&&0==this.selectedWeather){
      
      this.handleAppStateChange('background');
    }
    this.hideDateTimePicker();
  };

  fetchData = q => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q},th&units=metric&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          notifyWeather: {
            temp: json.main.temp,
            description: json.weather[0].description,
            id: json.weather[0].id
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };

  handleAppStateChange(appState) {
    if (appState === 'background') {
      // Schedule a notification
      PushNotification.localNotificationSchedule({
        message: 'Your weather is now', // (required)
        date: this.state.dateP2 // in 3 secs
      });
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  };
  
  componentWillReceiveProps = nextProps => this.fetchData(nextProps.city);
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  
  // This will notify the user in 3 seconds after sending the app to the 
  // background (like after pressing the home button or switching apps)
  




  render() {
    const ThunderS= [200,201,202,210,211,212,221,230,231,232];
    const Drizzle = [300,301,302,310,311,312,313,314,321];
    const Rain = [500,501,502,503,504,511,520,521,522,531];
    const Fog = [701,711,721,731,741,751,761,762,771,781];
    const ClearS = 800;
    const Clounds = [801,802,803,804];
    const AllW = 0;
    return (
      <View style={styles.container}>
      <Text>Select Weather</Text>
        <Picker
            selectedValue={this.state.selectedWeather}
            style={{ height: 50, width: '70%' }}
            onValueChange={(itemValue) =>
              this.setState({ selectedWeather: itemValue })
            }
          >
          <Picker.Item label="All" value={AllW} />
          <Picker.Item label="Thunder Storm" value={ThunderS} />
            <Picker.Item label="Drizzle" value={Drizzle} />
            <Picker.Item label="Rain" value={Rain} />
            <Picker.Item label="Fog" value={Fog} />
            <Picker.Item label="Clear Sky" value={ClearS} />
            <Picker.Item label="Clounds" value={Clounds} />
            </Picker>
        <Text>Select Time</Text>
        <Button title="Time" onPress={this.showDateTimePicker} />
        <View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='time'
        />
        </View>
        <PushController/>

      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});