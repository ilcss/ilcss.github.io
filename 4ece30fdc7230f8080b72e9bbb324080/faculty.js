import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import People from '../components/faculty/people'

const FacultyPage = () => (
  <Layout>
    <SEO title="Home" />
    <People />
  </Layout>
)

export default FacultyPage
