import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"
import RecipesList from "../components/recipeslist"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <h3>POPULAR RECIPES</h3>
    <RecipesList />
  </Layout>
)

export default IndexPage
