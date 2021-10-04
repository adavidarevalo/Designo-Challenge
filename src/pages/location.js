import React from 'react'
import Layout from "../components/layout"
import LocationContainer from '../components/LocationContainer'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from "gatsby"
const Conatiner = styled.section`
margin-block: 70px;
`

const Location = () => {
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsLocalizationcontainer {
          edges {
            node {
              lat
              log
              contactemail
              contactphone
              gridstyled
              subtitle
              subtitleAddress
              subtitleAddress2
              title
            }
          }
        }
      }      
    `)
    console.log(data.allDatoCmsLocalizationcontainer.edges)
    return(
        <Layout>
            <Conatiner>
                {data.allDatoCmsLocalizationcontainer.edges.map(item => <LocationContainer item={item}/>)}
            </Conatiner>
        </Layout>
    )
}

export default Location