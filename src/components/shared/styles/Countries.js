import styled from '@emotion/styled'
import home from '../../../images/assets/home/home.svg'

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-block: 50px;
max-width: 1200px;
article{
    text-align: center;
    margin-bottom: 0px 25px 30px 25px;
    img{
        margin: 0px;
        background-image: url(${home});
        background-position: center;
        background-size: cover;
    }
    h3{
        text-transform: uppercase;
    }
    a{
        text-transform: uppercase;
        background: #E88069;
        padding: 10px 15px;
        color: white;
        letter-spacing: 2px;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        &:hover{
            background: #cf7460;
        }
    }
}
@media (min-width: 650px) {
    justify-content: space-between;
}
@media (min-width: 800px) {
    width: 80%;
    margin: 70px auto;
}
`