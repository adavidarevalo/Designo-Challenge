import React from 'react'
import CardActivity from './CardActivity'
import laptop from '../../images/assets/home/desktop/laptop.jpg'
import appDesign from '../../images/assets/home/desktop/appDesign.jpg'
import graphicDesign from '../../images/assets/home/desktop/graphicDesign.jpg'


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