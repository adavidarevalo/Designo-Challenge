import styled from '@emotion/styled'

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-block: 50px;
article{
    text-align: center;
    margin-bottom: 0px 25px 30px 25px;
    img{
        margin: 0px;
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
    }
}
@media (min-width: 650px) {
    justify-content: space-between;
}
`