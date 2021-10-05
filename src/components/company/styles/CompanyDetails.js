import styled from '@emotion/styled'
import circle from '../../../images/assets/about/circle.svg'

export const Container = styled.article`
border-radius: 15px;
max-width: 1200px;
img{
    width: 100%;
    margin: 0px;
}
div{
    background-image: url(${circle});
    padding: 35px 10px;
    color: white;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        text-align: center;
    }
    p{
        width: 80%;
        margin: 20px auto;
    }
}
.colorDark{
    h2{
        color: #E88069;
        font-size: 2rem;
    }
    p{
        color: rgb(50,48,54);
        font-size: .9rem;
    }
}
&.GridInvert{
    img{
        grid-column-start: 2;
    }
    div{
        grid-column-start: 1;
        grid-row-start: 1;
    }
}
@media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    img{
        border-radius: 15px;
    }
}
@media (min-width: 1000px) {
    width: 80%;
    margin: 0px auto;
}
`