import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Intellisr"
        description="Intellisr pvt ltd is helping businesses grow with customised AI solutions.."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
