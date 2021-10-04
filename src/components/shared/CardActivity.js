import React from 'react'
import {Link} from 'gatsby'
import {Container} from './styles/CardActivity'
import styled from '@emotion/styled'
import arrowLink from '../../images/assets/shared/desktop/arrowLink.svg'

const CardActivity = ({backgound, title, link}) => {
    const Description = styled.div`
    background-image: url(${backgound});
    `
    return(
        <Container>
            <Description>
                <h3>{title}</h3>
                <Link to={link}>View projects <img src={arrowLink} alt='Arrow'/></Link>
            </Description>
        </Container>
    )
}

export default CardActivity