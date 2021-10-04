import React from 'react'
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import styled from '@emotion/styled'
import FormContainer from '../components/contact/FormContainer'
import Countries from '../components/shared/Countries'
const Conatiner = styled.section`
margin-block: 70px;
`

const contact = () => {
    return(
        <Layout>
            <Conatiner>
                <FormContainer/>
                <Countries/>
            </Conatiner>
        </Layout>
    )
}

export default contact