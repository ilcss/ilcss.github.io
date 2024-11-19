import React, { Component } from "react"
import Layout from "../components/layout"

import { useStaticQuery, graphql, Link } from "gatsby"

import ContentSquare from '../components/index/featured/contentSquare'

import MediaQuery from 'react-responsive'

function LoadProjectResearch({ projectName }) {
  const data = useStaticQuery(graphql`
      query ProjectResearchQuery {
          allContentElement(
              filter: {type: {eq: "publication"}},
              sort: { fields: date, order: DESC }
          ) {
              edges {
                  node {
                      id
                      imageName
                      fileName
                      linkName
                      authors
                      pageLink
                      projects
                      status
                      summary
                      title
                      type
                      journal
                      date
                  }
              }
          }
      }
  `)
  
    const projectNodes = data.allContentElement.edges.filter(n => n.node.projects.includes(projectName))

    if (projectNodes.length >= 1) {
      return(
        <>
        <MediaQuery minWidth = {500}>
        <div style = {subheaderContainer}>
          Research from this project:   
        </div>
        <div style = {researchContainer}>
        { projectNodes.map(({ node }) => (
            <ContentSquare node = {node} />
        )) }
        </div>
        </MediaQuery>
        <MediaQuery maxWidth = {499}>
        <div style = {subheaderContainerMobile}>
          Research from this project:   
        </div>
        <div style = {researchContainer}>
        { projectNodes.map(({ node }) => (
            <ContentSquare node = {node} />
        )) }
        </div>
        </MediaQuery>
        </>
        )
      } else {
        return(
          <>
          <MediaQuery minWidth = {500}>
            <div style = {subheaderContainer}>
              No Research Yet
            </div>
          </MediaQuery>
          <MediaQuery maxWidth = {499}>
            <div style = {subheaderContainerMobile}>
              No Research Yet
            </div>
          </MediaQuery>
          </>
          )
      }
    }

class ProjectPageResearch extends Component {
  render() {
    return(
      <>
      <MediaQuery minWidth = {500}>
        <LoadProjectResearch projectName = {this.props.projectName} />
        <Link to = '/projects' style = {backLink}>
          <div>
            Back to Projects
          </div>
        </Link>
      </MediaQuery>
      <MediaQuery maxWidth = {499}>
      <LoadProjectResearch projectName = {this.props.projectName} />
        <Link to = '/projects' style = {backLinkMobile}>
          <div>
            Back to Projects
          </div>
        </Link>
      </MediaQuery>
      </>
    )
  }
}

const researchContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    width: '100%',

    margin: 'auto',
    padding: '40px 0px 60px 0px'
}

const subheaderContainer = {
  fontFamily: 'Raleway',
  fontSize: '34px',
  fontWeight: '400',
  lineHeight: '1.2em',

  textAlign: 'left',
}

const subheaderContainerMobile = {
  ...subheaderContainer,
  fontSize: '26px',
}

const backLink = {
  textDecoration: 'none',
  color: '#3896f5',

  fontFamily: 'Raleway',
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: '1.2em',

  margin: '0px 0px 0px 20px'
}

const backLinkMobile = {
  ...backLink,
  fontSize: '20px',
}

export default ProjectPageResearch;