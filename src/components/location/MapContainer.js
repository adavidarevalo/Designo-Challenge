import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Container } from './styles/MapContainer' 
import { MapsApiKey } from '../../variables'


const MapContainer = ({lat= 53.000000 , long = 60.000000}) =>{
  const latitud = Number(lat)
  const longitud = Number(long)
  const defaultProps = {
    center: {
      lat: latitud ?  latitud : 49.257333 ,
      lng: longitud ? longitud : 123.1552957
    },
    zoom: 11,
  }
    return(
        <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MapsApiKey}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </Container>
    )
}

export default MapContainer