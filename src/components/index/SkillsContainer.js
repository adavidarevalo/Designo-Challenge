import React, {useState} from 'react'
import {graphql, useStaticQuery} from "gatsby"
import { Container } from './styles/SkillsContainer'


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
    return(
        <Container>
            {elements.map(item => (
                <div key={item.node.id} className='description'>
                    <img src={item.node.image.url} alt='element'/>
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