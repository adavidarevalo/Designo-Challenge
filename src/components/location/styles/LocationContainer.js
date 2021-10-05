import styled from '@emotion/styled'
import circle from '../../../images/assets/about/circle.svg'

export const LocationStyled = styled.section`
max-width: 1200px;
margin-bottom: 40px;
.MapElement{
    height: 100%;
    width: 100%;
}
.description{
    background: #FCF4F1;
    background-image: url(${circle});
    padding: 35px 10px;
    color: white;
    display: flex;
    flex-direction: column;
    div{
        margin-block: 25px;
        text-align: center;
        h2{
            color: #FD7A6B;
            font-size: 2rem;
            letter-spacing: 2px;
            text-align: center;
        }
        p, h3{
            color: black;
            margin: 0px;
            font-size: 1rem;
        }
    }
}
@media (min-width: 700px) {
    .MapElement{
        width: 80%;
        margin: 0px auto;
    }
    .description{
        width: 80%;
        margin: 10px auto;
        border-radius: 10px;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        div{
            text-align: inherit;
        }
    }
}
@media (min-width: 1000px) {
    background: #FCF4F1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: 0px auto 50px;
    &.GridInvert{
        .MapElement{
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
        }
        .description{
            grid-column-start: 1;
            grid-column-end: 2;
        }
    }
    .description{
        margin: 0px;
        width: 100%;
        .Elements{
            display: flex;
            align-items: center;
            justify-content: space-between
            background: red;
            div{
                margin-left: 15px;
            }
        }
    }
    .MapElement{
        width: 100%;
    }
}
`