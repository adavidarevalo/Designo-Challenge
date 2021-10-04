import React, {useState} from 'react'
import {graphql, useStaticQuery} from "gatsby"
import { Container } from '../styles/components/SkillsContainer'


const SkillsContainer = () => {
    const SkillsGraphql = useStaticQuery(graphql`
    query{
        allDatoCmsSkillscontainer {
          edges {
            node {
              id,
              title,
              description,
              image{
                url
              }
            }
          }
        }
      }
      
    `)
    const [elements, setElements] = useState([...SkillsGraphql.allDatoCmsSkillscontainer.edges])
    console.log(elements)
    return(
        <Container>
            {elements.map(item => (
                <div key={item.node.id} className='description'>
                    <img src={item.node.image.url}/>
                    <div>
                        <h2>{item.node.title}</h2>
                        <p>{item.node.description}</p>
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default SkillsContainer