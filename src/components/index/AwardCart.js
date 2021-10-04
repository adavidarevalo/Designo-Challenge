import React from 'react'
import { SectionContainer } from './styles/AwardCart'
import phone from '../../images/assets/home/desktop/phone.png'

const AwardCart = () =>(
    <SectionContainer>
        <div>
           <h2>Award-winning custom designs and digital branding solutions</h2>
           <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
           <button>Learn more</button>
        </div>
        <img src={phone} alt='phone'/>
    </SectionContainer>
)

export default AwardCart