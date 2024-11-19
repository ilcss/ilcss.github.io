import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/index/hero'
import Featured from '../components/index/featured/featured'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Featured />
  </Layout>
)

export default IndexPage
