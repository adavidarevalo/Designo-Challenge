import React from 'react'
import { Container } from '../styles/components/CompanyDetails'


const CompanyDetails = ({backgroundElement, title, firstText, secondText, gridElement, ColorElement, image}) => {
    return(
        <Container style={{background: backgroundElement}} className={gridElement && 'GridInvert'}>
            <img src={image} alt=''/>
            <div className={ColorElement && 'colorDark'}>
                <h2>{title}</h2>
                <p>{firstText}</p>
                {secondText && <p>{secondText}</p>}
            </div>
        </Container>
    )
}

export default CompanyDetails