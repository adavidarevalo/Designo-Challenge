import styled from '@emotion/styled'

export const Container = styled.section`
.css-76h5vz{
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    div{
        bacground: yellow;
    }
}
@media (min-width: 1000px) {
    width: 80%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    align-items: stretch;
    justify-items: stretch;
    grid-gap: 2%;
}
`

