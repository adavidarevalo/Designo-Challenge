import React from 'react'
import canada from '../images/assets/shared/desktop/canada.svg'
import australia from '../images/assets/shared/desktop/australia.svg'
import unitedKingdom from '../images/assets/shared/desktop/unitedKingdom.svg'
import {Link} from 'gatsby'
import { Container } from '../styles/components/Countries'

const Countries = () =>{
    return(
        <Container>
            <article>
                <img src={canada} alt='canada'/>
                <h3>Canada</h3>
                <Link>See location</Link>
            </article>
            <article>
                <img src={australia} alt='australia'/>
                <h3>Australia</h3>
                <Link>See location</Link>
            </article>
            <article>
                <img src={unitedKingdom} alt='unitedKingdom'/>
                <h3>United Kingdom</h3>
                <Link>See location</Link>
            </article>
        </Container>
    )
}

export default Countries