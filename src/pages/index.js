import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"
import CardContainer from "../components/cardcontainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <h3>POPULAR RECIPES</h3>
    <CardContainer />
  </Layout>
)

export default IndexPage
