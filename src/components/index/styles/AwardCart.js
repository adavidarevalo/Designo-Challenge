import styled from '@emotion/styled'
import home from '../../../images/assets/home/home.svg'

export const SectionContainer = styled.section`
background: #E88069;
padding: 20px 10px 0px 10px;
background-image: url(${home});
display: flex;
flex-direction: column;
align-items: center;
margin-top: 85px;
max-width: 1200px;
div{
    width: 90%;
    margin: 0 auto;
    color: white;
    text-align: center;
    h2{
        font-size: 1.7rem;
        line-height: 35px;
        font-weight: 500;
    }
    p{
        font-size: 1.1rem;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    button{
        text-transform: uppercase;
        font-size: 1.1rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background: white;
        transition: background .5s, transform .5s;
        &:hover{
            background: #cf7460;
            color: white;
            border: 1px solid #e78c78;
        }
    }
}
img{
    margin: 0px;
}
@media (min-width: 600px) {
    padding: 50px 10px 0px 10px;
    border-radius: 15px;
    width: 80%;
    margin: 0 auto;
}
@media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
`