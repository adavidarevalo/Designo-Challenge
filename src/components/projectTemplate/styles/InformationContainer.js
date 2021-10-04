import styled from '@emotion/styled'
import backgroundCircle from '../../../images/assets/shared/desktop/backgroundCircle.svg'

export const Container = styled.section`
background: #E88069;
background-image: url(${backgroundCircle});
background-position: center;
color: white;
padding: 50px 20px;
text-align: center;
h2{
    font-size: 2.1rem;
    letter-spacing: 2px;
}
p{
    line-height: 30px;
}
@media (min-width: 600px) {
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    p{
        max-width: 500px;
        margin: 0 auto;
    }
}
`