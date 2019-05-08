import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Picker
} from "react-native";
import WeatherFetching from "./WeatherFetching";
import Advice from "./Advice";
import ForecastFetching from "./ForecastFetching";
import MoreWeatherData from "./MoreWeatherData";
import Modal from "react-native-modalbox";
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

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: "Phuket",
      searchText: "",
      selectedCity: "Phuket"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.refs.modal3.close();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            {
              //hamburger
            }
            <Button onPress={() => this.refs.modal2.open()} transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.selectedCity}</Title>
          </Body>
          {
            //Search city
          }
          <Right>
            <Button onPress={() => this.refs.modal3.open()} transparent>
              <Icon name="search" />
            </Button>
            {
              //Refresh button
            }
            <Button transparent>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        {/*===============BODY===============*/}
        <Content>
          {
            //Main weather info with touchable for more details
          }
          <View style={styles.columnLayout}>
            <TouchableOpacity
              onPress={() => this.refs.modal1.open()}
              style={styles.viewStyle1}
            >
              <WeatherFetching city={this.state.selectedCity} />
            </TouchableOpacity>
            {
              //Advice section
            }
            <View style={styles.viewStyle2}>
              <Advice city={this.state.selectedCity} />
            </View>
          </View>
          {
            //Forecast section
          }
          <ForecastFetching city={this.state.selectedCity} />
        </Content>
        {
          //Show modal box when search button was clicked
        }
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          bn
          ref={"modal3"}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Change city</Text>
          {//Dropdown Picker
          }
          <Picker
            selectedValue={this.state.selectedCity}
            style={{ height: 50, width: '80%' }}
            onValueChange={(itemValue) =>
              this.setState({ selectedCity: itemValue })
            }
          >
            <Picker.Item label="Amnat Charoen" value="Amnat Charoen" />
            <Picker.Item label="Ang Thong" value="Ang Thong" />
            <Picker.Item label="Bangkok" value="Bangkok" />
            <Picker.Item label="Bueng Kan" value="Bueng Kan" />
            <Picker.Item label="Buriram" value="Buriram" />
            <Picker.Item label="Chachoengsao" value="Chachoengsao" />
            <Picker.Item label="Chai Nat" value="Chai Nat" />
            <Picker.Item label="Chaiyaphum" value="Chaiyaphum" />
            <Picker.Item label="Chanthaburi" value="Chanthaburi" />
            <Picker.Item label="Chiang Mai" value="Chiang Mai" />
            <Picker.Item label="Chiang Rai" value="Chiang Rai" />
            <Picker.Item label="Chonburi" value="Chonburi" />
            <Picker.Item label="Chumphon" value="Chumphon" />
            <Picker.Item label="Kalasin" value="Kalasin" />
            <Picker.Item label="Kamphaeng Phet" value="Kamphaeng Phet" />
            <Picker.Item label="Kanchanaburi" value="Kanchanaburi" />
            <Picker.Item label="Khon Kaen" value="Khon Kaen" />
            <Picker.Item label="Krabi" value="Krabi" />
            <Picker.Item label="Lampang" value="Lampang" />
            <Picker.Item label="Lamphun" value="Lamphun" />
            <Picker.Item label="Loei" value="Loei" />
            <Picker.Item label="Lopburi" value="Lopburi" />
            <Picker.Item label="Mae Hong Son" value="Mae Hong Son" />
            <Picker.Item label="Maha Sarakham" value="Maha Sarakham" />
            <Picker.Item label="Mukdahan" value="Mukdahan" />
            <Picker.Item label="Nakhon Nayok" value="Nakhon Nayok" />
            <Picker.Item label="Nakhon Pathom" value="Nakhon Pathom" />
            <Picker.Item label="Nakhon Phanom" value="Nakhon Phanom" />
            <Picker.Item label="Nakhon Ratchasima" value="Nakhon Ratchasima" />
            <Picker.Item label="Nakhon Sawan" value="Nakhon Sawan" />
            <Picker.Item label="Nakhon Si Thammarat" value="Nakhon Si Thammarat" />
            <Picker.Item label="Nan" value="Nan" />
            <Picker.Item label="Narathiwat" value="Narathiwat" />
            <Picker.Item label="Nong Bua Lam Phu" value="Nong Bua Lam Phu" />
            <Picker.Item label="Nong Khai" value="Nong Khai" />
            <Picker.Item label="Nonthaburi" value="Nonthaburi" />
            <Picker.Item label="Pathum Thani" value="Pathum Thani" />
            <Picker.Item label="Pattani" value="Pattani" />
            <Picker.Item label="Phang Nga" value="Phang Nga" />
            <Picker.Item label="Phatthalung" value="Phatthalung" />
            <Picker.Item label="Phayao" value="Phayao" />
            <Picker.Item label="Phetchabun" value="Phetchabun" />
            <Picker.Item label="Phetchaburi" value="Phetchaburi" />
            <Picker.Item label="Phichit" value="Phichit" />
            <Picker.Item label="Phitsanulok" value="Phitsanulok" />
            <Picker.Item label="Phra Nakhon Si Ayutthaya" value="Phra Nakhon Si Ayutthaya" />
            <Picker.Item label="Phrae" value="Phrae" />
            <Picker.Item label="Phuket" value="Phuket" />
            <Picker.Item label="Prachin Buri" value="Prachin Buri" />
            <Picker.Item label="Prachuap Khiri Khan" value="Prachuap Khiri Khan" />
            <Picker.Item label="Ranong" value="Ranong" />
            <Picker.Item label="Ratchaburi" value="Ratchaburi" />
            <Picker.Item label="Rayong" value="Rayong" />
            <Picker.Item label="Roi Et" value="Roi Et" />
            <Picker.Item label="Sa Kaeo" value="Sa Kaeo" />
            <Picker.Item label="Sakon Nakhon" value="Sakon Nakhon" />
            <Picker.Item label="Samut Prakan" value="Samut Prakan" />
            <Picker.Item label="Samut Sakhon" value="Samut Sakhon" />
            <Picker.Item label="Samut Songkhram" value="Samut Songkhram" />
            <Picker.Item label="Saraburi" value="Saraburi" />
            <Picker.Item label="Satun" value="Satun" />
            <Picker.Item label="Sing Buri" value="Sing Buri" />
            <Picker.Item label="Sisaket" value="Si sa ket" />
            <Picker.Item label="Songkhla" value="Songkhla" />
            <Picker.Item label="Sukhothai" value="Sukhothai" />
            <Picker.Item label="Suphan Buri" value="Suphan Buri" />
            <Picker.Item label="Surat Thani" value="Surat Thani" />
            <Picker.Item label="Surin" value="Surin" />
            <Picker.Item label="Tak" value="Tak" />
            <Picker.Item label="Trang" value="Trang" />
            <Picker.Item label="Trat" value="Trat" />
            <Picker.Item label="Ubon Ratchathani" value="Ubon Ratchathani" />
            <Picker.Item label="Udon Thani" value="Udon Thani" />
            <Picker.Item label="Uthai Thani" value="Uthai Thani" />
            <Picker.Item label="Uttaradit" value="Uttaradit" />
            <Picker.Item label="Yala" value="Yala" />
            <Picker.Item label="Yasothon" value="Yasothon" />
          </Picker>
          <View>
            <Button style={styles.btn} onPress={this.handleSubmit}>
              <Text style={styles.submitText}>Close</Text>
            </Button>
          </View>
        </Modal>
        {
          //Modal box for hamburger
        }
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal2"}
        >
        <TouchableOpacity
        onPress={() => this.refs.modal4.open()}
        >
          <Text style={{ fontSize: 18 }}>Notification Settings</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginTop: 10 }}>About</Text>
        </Modal>
        {
          //Modal box of more weather data
        }
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal1"}
        >
          <MoreWeatherData city={this.state.currentCity} />
        </Modal>
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal4"}
        >
        <Text>
          Notification Settings
          </Text>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    marginTop: 5,
    padding: 5
  },
  columnLayout: {
    flex: 1,
    flexDirection: "column"
  },
  viewStyle1: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 106, 205, 0.7)",
    margin: 8,
    marginTop: 12,
    borderRadius: 6
  },
  viewStyle2: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 106, 205, 0.7)",
    marginTop: 2,
    margin: 8,
    borderRadius: 6
  },
  modal3: {
    height: "60%",
    width: "90%",
    borderRadius: 6
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    padding: 4,
    fontSize: 18,
    height: 30,
    width: "80%",
    borderColor: "#DDDDDD",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
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
    fontWeight: 'bold'
  }
});
