//AIzaSyBl_7CEVq5IeRHdRMlpN4En3hXWIx3y_as'
import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { connect } from 'react-redux';
import { compose, withProps, withStateHandlers } from "recompose";

let mapState = (state) => {
  ;
  return { googleKey: state.manager.key, marks: state.manager.items, center: [-34.390, 150.644] }
}

let myKey = 0;
const BaseMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4fAJGAGpHvx4wcET9J-zXQrW0v9mohmE",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const [selectedLocation, setLocation] = useState({})
  let locations = [];

  let info = <ul><li>{selectedLocation.category}</li>
    <li>{selectedLocation.address}</li>
    <li>{selectedLocation.name}</li>
    <li>{selectedLocation.coordinates}</li></ul>

  return <GoogleMap
    options={{ gestureHandling: "greedy" }}
    defaultZoom={8}
    defaultCenter={{ lat: props.center[0], lng: props.center[1] }}
  >
    {props.marks.map((location, index) => {

      if (location.address && location.coordinates) {
        let split = location.coordinates.split(',');
        locations.push(<Marker

          onClick={function () {
            debugger;
            setLocation(Object.assign({}, location), { key: myKey++ })
          }}
          key={myKey++}
          position={{ lat: parseFloat(split[0]), lng: parseFloat(split[1]) }}>
          <InfoWindow>
            <ul style={{ listStyleType: 'none', textAlign: 'right' }}>
              <div class="container-fluid text-center">
                <label>:מיקום</label>
                <li>{selectedLocation.name}</li>
              </div>
              <div class="container-fluid text-center">
                <label>:כתובת</label>
                <li>{selectedLocation.address}</li>
              </div>
              <div class="container-fluid text-center">
                <label>:קואורדינטה</label>
                <li>{selectedLocation.coordinates}</li>
              </div>
              {typeof (selectedLocation.category) == 'object' &&
                <div class="container-fluid text-center">
                  <li>{selectedLocation.category.name} <label>:קטגוריה</label> </li>
                </div>}
            </ul>
          </InfoWindow>
        </Marker>)
      }

    })}
    <div>
      {locations}
    </div>
  </GoogleMap>
});

class withMarks extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <BaseMap center={this.props.center} key={this.props.googleKey} marks={this.props.marks || []}></BaseMap>
    )
  }
}


const WdsMapApp = connect(mapState)(withMarks);


export const WdsMap = WdsMapApp;
