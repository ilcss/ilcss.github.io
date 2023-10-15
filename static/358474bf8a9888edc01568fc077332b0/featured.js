import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"

import MediaQuery from "react-responsive"

import ContentSquare from "./contentSquare"

function LoadContent() {
  const data = useStaticQuery(graphql`
    query DataQuery {
      files: allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      content: allContentElement(
        filter: { type: { eq: "publication" } }
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
            featured
          }
        }
      }
    }
  `)

  const edges = data.content.edges

  const featuredEdges = edges.filter(edge => {
    return edge.node.featured === true
  })
  const nonFeaturedEdges = edges.filter(edge => {
    console.log(JSON.stringify(edge.node))
    return edge.node.featured === false
  })

  const newEdges = featuredEdges.concat(nonFeaturedEdges)

  return (
    <>
      <>
        {newEdges.length > 0 &&
          newEdges.map(({ node }, index) => (
            <ContentSquare node={node} key={index} />
          ))}
      </>
    </>
  )
}

class Featured extends Component {
  render() {
    return (
      <>
        <MediaQuery minWidth={500}>
          <div style={componentWrapper}>
            <div style={missionText}>
              We are the Interdisciplinary Laboratory of Computational Social
              Science
            </div>
            <div style={missionText}>View our latest research</div>

            <div style={squaresHolder}>
              <LoadContent />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={499}>
          <div style={componentWrapper}>
            <div style={missionTextMobile}>
              We are the Interdisciplinary Laboratory of Computational Social
              Science
            </div>
            <div style={missionTextMobile}>View our latest research</div>

            <div style={smallLine} />

            <div style={squaresHolderMobile}>
              <LoadContent />
            </div>
          </div>
        </MediaQuery>
      </>
    )
  }
}

const componentWrapper = {
  width: "100%",
  backgroundColor: "#f5f5f5",
  paddingTop: "50px",
}

const missionText = {
  maxWidth: "720px",
  margin: "auto",
  padding: "0px 10px 30px 10px",

  fontFamily: "Raleway",
  fontSize: "34px",
  fontWeight: "400",
  lineHeight: "1.2em",

  textAlign: "center",
}

const missionTextMobile = {
  ...missionText,
  fontSize: "26px",
}

const smallLine = {
  width: "70%",
  height: "1px",
  backgroundColor: "#aaa",
  margin: "0px auto 0px auto",
}

const squaresHolder = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "left",
  maxWidth: "1600px",

  margin: "auto",
  padding: "20px 0px 60px 0px",

  borderTop: "1px #aaa solid",
}

const squaresHolderMobile = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "left",
  maxWidth: "1600px",

  margin: "auto",
  padding: "20px 0px 60px 0px",
}

export default Featured
