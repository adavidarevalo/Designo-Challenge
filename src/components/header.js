import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {HeaderContainer, MenuContainer} from '../styles/components/header'

const Header = () => {
  const [menu, setMenu] = useState(false)
return(
  <HeaderContainer>
    <div className='container'>
    <Link>
      <StaticImage
      src='../images/assets/shared/desktop/logoDark.png'
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
        src='../images/assets/shared/mobile/icon-hamburger.svg'
        quality={95}
        alt="Logo"
      />
      ): (
        <StaticImage
        src='../images/assets/shared/mobile/icon-close.svg'
        quality={95}
        alt="Logo"
      />
      )}
    </button>
    </div>
    {menu &&(
    <MenuContainer>
      <Link to='/'>Our company</Link>
      <Link to='/'>Locations</Link>
      <Link to='/'>Contact</Link>
    </MenuContainer>
    )}
  </HeaderContainer>
)}



export default Header
