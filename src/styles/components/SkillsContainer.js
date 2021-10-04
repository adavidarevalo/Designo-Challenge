import styled from '@emotion/styled'
import home from '../../images/assets/home/desktop/home.svg'

export const Container =  styled.section`
width: 90%;
margin: 0 auto;
.description{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 50px 70px;
    img{
        width: 90%;
        background-image: url(${home});
        background-size: cover;
        background-position: center;
        max-width: 200px;
    }
    div{
        h2{
            text-align: center;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: 5px;
        }
        p{
            text-align: center;
            width: 90%;
            margin: 0 auto;
            font-size: 1.1rem;
            line-height: 25px;
        }
    }
}
@media (min-width: 600px) {
    width: 80%;
    margin: 0 auto;
    .description{
        flex-direction: row;
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 25px;
            p{
                width: 100%;
                text-align: initial;
            }
        }
    }
}
@media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    .description{
        flex-direction: column;
        div{
            align-items: center;
            p{
                text-align: center;
            }
        }
    }
}
`