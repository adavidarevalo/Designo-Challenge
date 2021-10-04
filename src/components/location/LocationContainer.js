import React from 'react'
import MapContainer from './MapContainer'
import { LocationStyled } from './styles/LocationContainer'

const LocationContainer = ({item}) => {
    console.log(item)
    const {
        contactemail,
        contactphone,
        gridstyled,
        lat,
        log,
        subtitle,
        subtitleAddress,
        subtitleAddress2,
        title
    } = item.node
    return(
        <LocationStyled className={gridstyled && 'GridInvert'}>
            <div className='MapElement'>
                <MapContainer/>
            </div>
            <div className='description'>
                <div>
                    <h2>{title}</h2>
                    <div className='Elements'>
                        <div>
                            <h3>{subtitle}</h3>
                            <p>{subtitleAddress}</p>
                            <p>{subtitleAddress2}</p>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>P : {contactphone}</p>
                            <p>M : {contactemail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </LocationStyled>
    )
}

export default LocationContainer