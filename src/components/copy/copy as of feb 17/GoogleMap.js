import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
    //lat and lng in the center
      lat: 44.88,
      lng: -65.15
    },
    zoom: 8
  };
 
  render() {
    return (
      //size of map
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAevAptmzosOKdb75C6Z3_GXmh_apYmCUM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            //lat and lng
            lat={44.88083}
            lng={-65.15778}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;