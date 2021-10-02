import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { SectionContainer } from '../styles/components/AwardCart'

const AwardCart = () =>(
    <SectionContainer>
        <div>
           <h2>Award-winning custom designs and digital branding solutions</h2>
           <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
           <button>Learn more</button>
        </div>
        <StaticImage
           src='../images/assets/home/desktop/image-hero-phone.png'
           quality={95}
           layout="fixed"
           alt="Logo"
         />
    </SectionContainer>
)

export default AwardCart