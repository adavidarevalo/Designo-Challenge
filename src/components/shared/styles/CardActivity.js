import styled from '@emotion/styled'

export const Container = styled.article`
    color: white;
    height: 200px;
    width: 90%;
    margin: 0 auto;
    border-radius: 15px;
    margin-block: 20px;
    box-shadow: 2px 2px 15px 1px rgb(0 0 0 / 20%);
    div{
        width: 100%;
        height: 100%;
        background-position: bottom;
        background-size: cover;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3{
            text-transform: uppercase;
            margin: 0px;
            font-size: 2rem;
            letter-spacing: 2px;
        }
        a{
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            font-size: 1rem;
            letter-spacing: 2px;
            display: flex;
            align-items: baseline;
            img{
                margin-left: 10px;
                margin-bottom: 0px;
            }
            &:hover{
                border-bottom: 1px solid white;
            }
        }
    }

@media (min-width: 600px) {
    width: 80%;
}
@media (min-width: 1000px) {
    width: 100%;
    height: 100%;
}
`