import React from 'react'
import Layout from "../components/layout"
import styled from '@emotion/styled'
import FormContainer from '../components/FormContainer'
import Countries from '../components/Countries'
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