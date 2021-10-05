import styled from '@emotion/styled'
import circle from '../../../images/assets/about/circle.svg'

export const Container = styled.section`
background: #E88069;
background-image: url(${circle});
padding: 30px 20px;
max-width: 1200px;
div{
    color: white;
    text-align: center;
    h2{
        font-size: 2rem;
    }
    p{
        width: 90%;
        margin: 0 auto;
        line-height: 25px;
    }
}
form{
    margin-top: 20px;
    input{
        display: block;
        width: 100%;
        background: none;
        border: none;
        border-bottom: 1px solid white;
        margin-bottom: 10px;
        color: white;
        padding: 5px 15px;
        outline: none;
        ::placeholder {
            color: white;
        }
    }
    textarea{
        background: none;
        border: none;
        border-bottom: 1px solid white;
        max-width: 100%;
        width: 100%;
        outline: none;
        padding: 5px 15px;
        color: white;
        min-height: 100px;
        ::placeholder {
            color: white;
        }
    }
    .FormButton{
        background: white;
        border-radius: 5px;
        width: 120px;
        color: black;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: 20px;
        &:hover{
            background: #c1c0c0;
        }
    }
}
@media (min-width: 600px) {
    width: 90%;
    margin: 0 auto;
    border-radius: 15px;
    padding: 50px 80px;
}
@media (min-width: 825px) {
    width: 80%;
}
@media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    div{
        width: 50%;
    }
    form{
        width: 45%;
    }
}
`