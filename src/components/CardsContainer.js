import React from 'react'
import CardActivity from './CardActivity'
import laptop from '../images/assets/home/desktop/laptop.jpg'
import { Container } from '../styles/components/CardsContainer'

const CardsContainer = () => {
    return(
        <>
        <Container>
            <CardActivity 
            className='firstContainer'
            backgound={laptop}/>
            <div>
            <CardActivity 
            backgound={laptop}/>
            <CardActivity 
            backgound={laptop}/>
            </div>
        </Container>
        </>
    )
}

export default CardsContainer