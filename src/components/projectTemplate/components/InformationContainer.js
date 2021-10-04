import React from 'react'
import {Container} from '../styles/InformationContainer'

const InformationContainer = ({item}) => {
    const {title, subtitle} = item[0]
    return(
        <Container>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </Container>
    )
}

export default InformationContainer