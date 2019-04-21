import React from 'react';
<<<<<<< HEAD
import {Text, StyleSheet, ActivityIndicator, ImageBackground, View, alert, AsyncStorage } from 'react-native';
import {MapView, Marker} from 'expo';
import {Constants} from 'expo';
import { Location, Permissions } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
const k = 'AIzaSyDPC3aFjcV7EIznzmBPT3zaYqNlizE6PsA';
import bgImage from '../../images/background1.jpg';
import placesService from '../../services/placesService';
import get from 'lodash/get';
import pick from 'lodash/pick';



=======
import {Text, StyleSheet, ActivityIndicator, ImageBackground, View, alert  } from 'react-native';
import {MapView, Marker} from 'expo';
import {Constants} from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
const k = 'AIzaSyDPC3aFjcV7EIznzmBPT3zaYqNlizE6PsA';
import bgImage from '../../images/background1.jpg';





>>>>>>> master
class LocationHome extends React.Component {
    constructor() {
    super();
    this.state = {
      isLoading: true,
      locationFound: false,
      latitude: null,
      longitude: null,
      error: null,
      googleError: null,
      markers: [],
<<<<<<< HEAD
      location: null,
      userLocation: null,
      errorMessage: null,
=======
>>>>>>> master
    };
  }
  // on mount find location and fetchmarkerdata
  componentDidMount() {
<<<<<<< HEAD
    this.getLocationAsync();
  };

	getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			});
		}
		let location = await Location.getCurrentPositionAsync({});
		await this.setState({ location });
    this.getHospitals();
    console.log('location',this.state.location)
  };
  
  getHospitals = async () => {
    const coords = this.state.location.coords;
    const userLocation = pick(coords, ['latitude', 'longitude']);
    await this.setState({ userLocation })
    this.fetchMarkerData();
  };
  
  fetchMarkerData = async () => {
=======
    this.fetchLocationData();
  };

  fetchLocationData() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var lat, lng;
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          locationFound: true,
        });
        this.fetchMarkerData(lat, lng);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

  }

  fetchMarkerData(lat, lng) {
>>>>>>> master
    // Creation of url string for google maps as per documentatiom https://developers.google.com/places/
    var googlePlace='https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'
    var input = 'input=Hospital';
    var inputtype = 'inputtype=textquery';
    var type='type=hospital'
    var fields = 'fields=formatted_address,name,opening_hours,geometry';
<<<<<<< HEAD
    var distance = '2000@'
    var locationbias = 'locationbias=circle:'+ distance + this.state.userLocation.latitude + ',' + this.state.userLocation.longitude;
    var key= 'key='+ k;
    var url = googlePlace + '&' + input + '&' + inputtype +'&'+  type + '&' + fields + '&' + locationbias + '&' + key ;

    // Fetch call to Google
    console.log('url to fetch', url)

    fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
       this.setState({
           markers: responseJson,
        });
        console.log('print1', JSON.parse(this.state.markers))
    
      })
        .catch((error) => {
          console.log(error);
          this.setState({ googleError: error.message })
      });

  };

    
 
  render()  {
    console.log('dsfghfdszxcfdg',(JSON.parse(markers).candidates))
=======
    var distance = '5000@'
    var locationbias = 'locationbias=circle:'+ distance + lat + ','+ lng;
    var key= '&key='+ k;
    var url = googlePlace + '&' + input + '&' + inputtype +'&'+  type + '&' + fields + '&' + locationbias + '&' + key ;

    // Fetch call to Google
    console.log('url to fetch',url)
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('printing response',responseJson.candidates)
        this.setState({ 
          isLoading: false,
          googleError: false,
          markers: responseJson.candidates,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ googleError: error.message })
      });
};


  // renders list of hospitals on the map
render()  {
>>>>>>> master
    if (this.state.isLoading == true) {
    return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <Text> Loading...</Text>
      <ActivityIndicator size='large' style={styles.activityContainer}>
      </ActivityIndicator>
      </ImageBackground>
<<<<<<< HEAD
    )};

    const { a, b } = this.state;
  //  const markers = JSON.parse(a);
  //  const location = JSON.parse(b);
    return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
     <MapView
      style={{ flex: 1 }}
      region={{
        latitude: this.state.location.latitude,
        longitude: this.state.location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
        >
        {markers.map((marker, index) => {
     const metadata = `Status: ${marker.statusValue}`;

     return (
         <MapView.Marker
            key={index}
            coordinate={marker[0].geometry.location}
            title={marker.stationName}
            description={metadata}
         />
     );
  })}
      </MapView>
  </ImageBackground>
    );
};
};
=======
    )}; 
    return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>

    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Latitude: {this.state.latitude}</Text>
      <Text>Longitude: {this.state.longitude}</Text>
      <Text> this.state.markers
      </Text>
      {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
    </View>
   
    <MapView
    style={{ flex: 1 }}
    region={{
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}>

      {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
        
        const coords = {
          latitude: json.stringify(marker.lat),
          longitude: json.stringify(marker.lat),
      };

     const metadata = `Status: ${marker.statusValue}`;

     return (
         <Marker
            key={index}
            provider="google"
            coordinate={coords}
            title={marker.name} // edit
            description={marker.formatted_address} // edit
         />
     );
    })}
    </MapView>
  </ImageBackground>

  );
  };
};

>>>>>>> master
const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    width: null, 
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityContainer: {
    color:'white'
  }
});

export default LocationHome;
