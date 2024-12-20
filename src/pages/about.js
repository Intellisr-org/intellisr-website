import React from "react"
import AboutPage from "../components/about/aboutPage"
import Seo from "../components/seo"
import Layout from "../components/layout"


const About = () => {
  return (
    <Layout>
      <Seo
        title="Intellisr"
        description="Intellisr pvt ltd is helping businesses grow with customised AI solutions.."
      ></Seo>
      <AboutPage></AboutPage>
    </Layout>
  )
}

export default About
