import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LAAboutHero from '../components/latin-america/laAboutHero'
import LatinAmerica from '../components/latin-america/latinAmerica'
import LAFaculty from '../components//latin-america/laFaculty'

const LatinAmericaPage = () => (
  <Layout>
    <SEO title="Home" />
    <LAAboutHero />
    <LatinAmerica />
    <LAFaculty />
  </Layout>
)

export default LatinAmericaPage
