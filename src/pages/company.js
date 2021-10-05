import React from 'react'
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import CompanyDetails from '../components/company/CompanyDetails'
import Countries from '../components/shared/Countries'
import styled from '@emotion/styled'
import meet from '../images/assets/about/meet.jpg'
import woman from '../images/assets/about/woman.jpg'
import pictures from '../images/assets/about/pictures.jpg'

const Conatiner = styled.section`
margin-block: 70px;
`

const company = () => (
    <Layout>
        <Seo title="Company"/>
        <Conatiner>
        <CompanyDetails 
        backgroundElement={`#E88069`}
        title={'About Us'}
        firstText={'Founded in 2010, we are a creative agency that produces lasting results for our clients. We have partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We are always looking forward to creating brands, products, and  digital experiences that connect with our clients audiences.'}
        image={meet}
        />
        <CompanyDetails 
        backgroundElement={`#FDF3F1`}
        title={'World-class talent'}
        firstText={'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'}
        secondText={'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'}
        image={woman}
        ColorElement={true}
        gridElement={true}
        />
        <Countries/>
        <CompanyDetails 
        backgroundElement={`#FDF3F1`}
        title={'The real deal'}
        firstText={'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'}
        secondText={'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'}
        image={pictures}
        ColorElement={true}
        />
        </Conatiner>
    </Layout>
)

export default company