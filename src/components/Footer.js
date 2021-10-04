import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import { FooterContainer } from '../styles/components/Footer'
import facebook from '../images/assets/shared/desktop/facebook.svg'
import youtube from '../images/assets/shared/desktop/youtube.svg'
import twitter from '../images/assets/shared/desktop/twitter.svg'
import pinterest from '../images/assets/shared/desktop/pinterest.svg'
import instagram from '../images/assets/shared/desktop/instagram.svg'
import CartTalk from './CartTalk'

const Footer = () => {
    return(
        <>
        <CartTalk/>
        <FooterContainer>
            <div className='mainFooter'>
            <StaticImage
                src='../images/assets/shared/desktop/logoLight.png'
                quality={95}
                layout="fixed"
                width={220}
                height={30}
                alt="Logo"
                />
                <div>
                    <Link to='/'>company</Link>
                    <Link to='/'>locantions</Link>
                    <Link to='/'>contact</Link>
                </div>
            </div>
            <div className='AddressContainer'>
                <div>
                    <p>Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div>
                    <p>Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className='SocialContainer'>
                    <Link to='/'>
                        <img src={facebook} alt='Facebook'/>
                    </Link>
                    <Link to='/'>
                        <img src={youtube} alt='youtube'/>
                    </Link>
                    <Link to='/'>
                        <img src={twitter} alt='twitter'/>
                    </Link>
                    <Link to='/'>
                        <img src={pinterest} alt='pinterest'/>
                    </Link>
                    <Link to='/'>
                        <img src={instagram} alt='instagram'/>
                    </Link>
                </div>
            </div>
        </FooterContainer>
        </>
    )
}

export default Footer