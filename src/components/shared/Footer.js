import React from 'react'
import { Link } from 'gatsby'
import { FooterContainer } from './styles/Footer'
import facebook from '../../images/assets/shared/facebook.svg'
import youtube from '../../images/assets/shared/youtube.svg'
import twitter from '../../images/assets/shared/twitter.svg'
import pinterest from '../../images/assets/shared/pinterest.svg'
import instagram from '../../images/assets/shared/instagram.svg'
import CartTalk from './CartTalk'
import logoDark from '../../images/assets/shared/logoLight.png'

const Footer = ({hiden}) => {
    return(
        <>
        {!hiden && <CartTalk/>}
        <FooterContainer>
            <div className='mainFooter'>
                <Link to='/'>
                    <img src={logoDark} alt='logo'/>
                </Link>
                <div>
                    <Link 
                    to='/company'
                    activeClassName="activePage"
                    >company</Link>
                    <Link 
                    to='/location'
                    activeClassName="activePage"
                    >locantions</Link>
                    <Link 
                    to='/contact'
                    activeClassName="activePage"
                    >contact</Link>
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