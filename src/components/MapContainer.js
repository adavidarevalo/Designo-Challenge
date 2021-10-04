import React from 'react'
import GoogleMapReact from 'google-map-react'
import { MapsApiKey } from '../variables'
import { Container } from '../styles/components/MapContainer' 

const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }
  const AnyReactComponent = ({ text }) => <div>{text}</div>

const MapContainer = ({lat= 59.955413, long = 30.337844}) =>{
    console.log(lat)
    console.log(long)
    return(
        <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MapsApiKey}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={lat}
            lng={long}
          />
        </GoogleMapReact>
      </Container>
    )
}

export default MapContainer