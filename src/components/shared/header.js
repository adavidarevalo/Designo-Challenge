import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {HeaderContainer, MenuContainer, MenuDesktop} from './styles/header'

const Header = () => {
  const [menu, setMenu] = useState(false)
return(
  <HeaderContainer>
    <div className='container'>
    <Link>
      <StaticImage
      src='../../images/assets/shared/desktop/logoDark.png'
      quality={95}
      layout="fixed"
      width={200}
      height={25}
      alt="Logo"
    />
    </Link>
    <button
    onClick={()=>setMenu(!menu)}
    >
      {!menu 
      ?(
        <StaticImage
        src='../../images/assets/shared/mobile/icon-hamburger.svg'
        quality={95}
        alt="Logo"
      />
      ): (
        <StaticImage
        src='../../images/assets/shared/mobile/icon-close.svg'
        quality={95}
        alt="Logo"
      />
      )}
    </button>
    </div>
    {menu &&(
    <MenuContainer>
      <Link to='/company'>Our company</Link>
      <Link to='/location'>Locations</Link>
      <Link to='/contact'>Contact</Link>
    </MenuContainer>
    )}
    <MenuDesktop>
      <Link to='/company'>Our company</Link>
      <Link to='/location'>Locations</Link>
      <Link to='/contact'>Contact</Link>
    </MenuDesktop>
  </HeaderContainer>
)}



export default Header
