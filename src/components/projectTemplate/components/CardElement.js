import React from 'react'
import { Container } from '../styles/CardElement'

const CardElement = ({item}) => {
    const {description, title, image} = item
    return(
        <Container>
            <img src={image.url} alt='project'/>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Container>
    )
}

export default CardElement