import * as React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import AwardCart from '../components/index/AwardCart'
import CardsContainer from '../components/shared/CardsContainer'
import SkillsContainer from '../components/index/SkillsContainer'


const IndexPage = () => (
  <Layout>
    <Seo title="pepe" />
      <AwardCart/>
      <CardsContainer/>
      <SkillsContainer/>
  </Layout>
)

export default IndexPage
