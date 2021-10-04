import React from 'react'
import {Link} from 'gatsby'
import {Container} from '../styles/components/CardActivity'
import styled from '@emotion/styled'
import arrowLink from '../images/assets/shared/desktop/arrowLink.svg'
const CardActivity = ({backgound}) => {
    const Description = styled.div`
    background-image: url(${backgound});
    `
    return(
        <Container>
            <Description>
                <h3>Web desing</h3>
                <Link to='/'>View projects <img src={arrowLink} alt='Arrow'/></Link>
            </Description>
        </Container>
    )
}

export default CardActivity