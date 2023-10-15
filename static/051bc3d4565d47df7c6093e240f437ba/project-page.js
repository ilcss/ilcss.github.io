import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"

import ProjectPageResearch from './project-page-research'

import MediaQuery from 'react-responsive'

export default function ProjectPage({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <MediaQuery minWidth = {500}>
      <div style = {contentWrapper}>
        <h1 style = {titleText}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style = {descriptionContainer} />

        <div style = {researchContainer}>
          <ProjectPageResearch projectName = {post.frontmatter.title} />
        </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth = {499}>
      <div style = {contentWrapperMobile}>
        <h1 style = {titleTextMobile}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style = {descriptionContainerMobile} />

        <div style = {researchContainer}>
          <ProjectPageResearch projectName = {post.frontmatter.title} />
        </div>
      </div>
      </MediaQuery>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
const contentWrapper = {
  width: '100%',
  minHeight: '700px',
  margin: '40px auto 20px auto',
  padding: '0px 40px 0px 40px'
}

const contentWrapperMobile = {
  ...contentWrapper,
  padding: '0px 10px 0px 10px'
}

const titleText = {
  marginBottom: '20px'
}

const titleTextMobile = {
  fontSize: '20px',
  marginBottom: '10px'
}

const descriptionContainer = {
  fontFamily: 'Raleway',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '1.3em',
}

const descriptionContainerMobile = {
  ...descriptionContainer,
    fontSize: '18px',
}

const researchContainer = {
  width: '100%',
  margin: 'auto',
  padding: '40px 0px 26px 0px',
}