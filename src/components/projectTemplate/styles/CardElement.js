import styled from '@emotion/styled'

export const Container = styled.div`
    background: #FCF3F1;
    border-radius: 15px;
    width:80%;
    margin: 35px auto;
    img{
        margin: 0px;
        width: 100%;
    }
    div{
        width:80%;
        margin: 0px auto;
        text-align: center;
        padding-block: 20px;
        h2{
            color: #E88069;
            font-weight: 500;
            letter-spacing: 2px;
        }
        p{
            font-size: 1rem;
            line-height: 25px;
        }
    }
    &:hover,
    &:active{
        background: #E88069;
        color: white;
        div{
            h2{
                color: white;
            }
        }
    }
    @media (min-width: 1000px) {
        max-width: 300px;
        margin-inline: 20px;
    }
`