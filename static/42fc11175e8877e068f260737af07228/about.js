import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutHero from '../components/about/aboutHero'
import About from '../components/about/about'
import Faculty from '../components/about/faculty'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutHero />
    <About />
    <Faculty />
  </Layout>
)

export default AboutPage
