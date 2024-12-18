import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Intellisr"
        description="Intellisr pvt ltd is helping businesses grow with customised AI solutions."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
