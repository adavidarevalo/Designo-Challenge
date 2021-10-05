import * as React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import styled from '@emotion/styled'
const Container = styled.section`
display: flex;
margin-block: 100px;
flex-direction: column;
justify-content: center;
align-items: center;
height: 40vh;
h2{
  font-size: 5rem;
  letter-spacing: 5px;
}
p{
  font-size: 1.5rem;
}
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <h1>404</h1>
      <p>Page Not Found</p>
    </Container>
  </Layout>
)

export default NotFoundPage
