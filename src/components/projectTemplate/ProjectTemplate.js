import React, {useState} from 'react'
import Layout from '../shared/layout'
import styled from '@emotion/styled'
import {graphql} from "gatsby"
import CardElement from './components/CardElement'
import InformationContainer from './components/InformationContainer'
import CardsContainer from '../shared/CardsContainer'
const Conatiner = styled.section`
margin-block: 70px;
`
const ElementConatiner = styled.section`
@media (min-width: 1000px) {
  width:80%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
`
export const query =  graphql`
query($name: String!){
    allDatoCmsPagesdinamic(filter: {name: {eq: $name}}){
      nodes {
        name,
        title,
        subtitle
      }
    }
    allDatoCmsCarddinamic(filter: {name: {eq: $name}}){
      nodes{
        title
        description
        image{
          url
        }
      }
    }
  }
  `

const ProjectTemplate = ({data}) => {
    const [cardElements, setCardElements] = useState([...data.allDatoCmsCarddinamic.nodes])
    console.log(cardElements)
    return(
        <Layout>
            <Conatiner>
                <InformationContainer item={data.allDatoCmsPagesdinamic.nodes}/>
                <ElementConatiner>
                  {cardElements.map(item => (<CardElement item={item}/>))}
                </ElementConatiner>
                <CardsContainer/>
            </Conatiner>
        </Layout>
    )
}

export default ProjectTemplate