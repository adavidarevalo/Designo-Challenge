import styled from '@emotion/styled'
import backgroundCircle from '../../../images/assets/shared/backgroundCircle.svg'

export const Container = styled.div`
width: 90%;
max-width: 1200px;
margin: 0 auto;
background: #E88069;
border-radius: 15px;
padding: 25px 20px;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${backgroundCircle});
background-position: center;
z-index: 1000;
position: relative;
div{
    text-align: center;
    color: white;
    h3{
        font-size: 2rem;
    }
    p{
        font-size: 1.1rem;
    }
}
button{
    padding: 10px;
    font-size: 1.3rem;
    background: white;
    border: none;
    border-radius: 5px;
    max-width: 200px;
    transition: background .5s, transform .5s;
    &:hover{
        background: #cf7460;
        color: white;
        border: 1px solid #e78c78; 
    }
}
@media (min-width: 825px) {
    width: 80%;
}
@media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    div{
        text-align: inherit;
        max-width: 400px;
    }
}
`

export const BackgroundElement = styled.div`
background: black;
width: 100%;
height: 150px;
position: absolute;
bottom: 0px;

`

export const Element = styled.div`
position: relative;
`