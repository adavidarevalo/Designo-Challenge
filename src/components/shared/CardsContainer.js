import React from 'react'
import CardActivity from './CardActivity'
import laptop from '../../images/assets/home/laptop.jpg'
import appDesign from '../../images/assets/home/appDesign.jpg'
import graphicDesign from '../../images/assets/home/graphicDesign.jpg'


import { Container } from './styles/CardsContainer'

const CardsContainer = () => {
    return(
        <>
        <Container>
            <CardActivity 
            className='firstContainer'
            backgound={laptop}
            title='Web desing'
            link='webDesign'
            />
            <div>
            <CardActivity 
            backgound={appDesign}
            title='App desing'
            link='appDesign'
            />
            <CardActivity 
            backgound={graphicDesign}
            title='Graphic Design'
            link='graphicDesign'
            />
            </div>
        </Container>
        </>
    )
}

export default CardsContainer