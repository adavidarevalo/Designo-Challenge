import React, {useState} from "react"
import { Link } from "gatsby"
import {HeaderContainer, MenuContainer, MenuDesktop} from './styles/header'
import logoDark from '../../images/assets/shared/logoDark.png'
import iconMenu from '../../images/assets/shared/iconMenu.svg'
import iconClose from '../../images/assets/shared/iconClose.svg'

const Header = () => {
  const [menu, setMenu] = useState(false)
return(
  <HeaderContainer>
    <section>
    <div className='container'>
    <Link to='/'>
      <img src={logoDark} alt='Logo'/>
    </Link>
    <button
    onClick={()=>setMenu(!menu)}
    >
      {!menu 
      ?(
        <img src={iconMenu} alt='Menu'/>
      ): (
        <img src={iconClose} alt='Menu'/>
      )}
    </button>
    </div>
    {menu &&(
    <MenuContainer>
      <Link 
      to='/company'
      activeClassName="activePage"
      >Our company</Link>
      <Link 
      to='/location'
      activeClassName="activePage"
      >Locations</Link>
      <Link 
      to='/contact'
      activeClassName="activePage"
      >Contact</Link>
    </MenuContainer>
    )}
    <MenuDesktop>
      <Link 
      to='/company'
      activeClassName="activePage"
      >Our company</Link>
      <Link 
      to='/location'
      activeClassName="activePage"
      >Locations</Link>
      <Link 
      to='/contact'
      activeClassName="activePage"
      >Contact</Link>
    </MenuDesktop>
    </section>
  </HeaderContainer>
)}



export default Header
