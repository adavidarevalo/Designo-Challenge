import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'

const fadeInDown = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
}
100% {
    opacity: 1;
    transform: none;
}
`



export const HeaderContainer = styled.header`
padding-block: 20px;
position: fixed;
background: white;
left: 0px;
right: 0px;
top: 0px;
z-index: 100000;
.container{
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        img{
            width: 200px;
            margin: 0px;
        }
    }
    button{
        border: none;
        background: none;
    }
}
@media (min-width: 825px) {
    section{
    display: flex;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    .container{
        width: 100%;
        button{
            display: none;
        }
    }
}
}
`

export const MenuContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 10px;
position: absolute;
z-index: 1000;
background: black;
width: 100%;
animation:${fadeInDown} 1s both;
a{
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 2px;
    padding-bottom: 10px;
}
.activePage{
    border-bottom: 2px solid #E88069;
  }
`
export const MenuDesktop = styled.div`
display: none;
.activePage{
    border-bottom: 2px solid #E88069;
  }
@media (min-width: 825px) {
    display: flex;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: black;
    }
}
`