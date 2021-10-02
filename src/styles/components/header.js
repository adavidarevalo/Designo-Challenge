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
.container{
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        border: none;
        background: none;
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
`
