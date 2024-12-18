import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="Intellisr"
        description="Intellisr pvt ltd is helping businesses grow with customised AI solutions.."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
