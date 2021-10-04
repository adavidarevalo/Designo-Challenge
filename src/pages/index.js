import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AwardCart from '../components/AwardCart'
import CardsContainer from '../components/CardsContainer'
import SkillsContainer from '../components/SkillsContainer'


const IndexPage = () => (
  <Layout>
    <Seo title="pepe" />
      <AwardCart/>
      <CardsContainer/>
      <SkillsContainer/>
  </Layout>
)

export default IndexPage
