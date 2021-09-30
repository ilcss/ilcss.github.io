import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ProjectImage = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 3600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}
  

class ProjectSquare extends Component {
    render() {
        

        return(
            <div style = {squareWrapperStyle}>
                <div style = {innerProjectStyle}>
                  <div style = {bottomStyle}>
                    <p style = {typeStyle}>
                        Project
                    </p>
                      <p style = {titleStyle}>
                          { this.props.node.title }
                      </p>
                      <p style = {summaryStyle}>
                          { this.props.node.summary }
                      </p>
                  </div>
                  <div style = {imageHolder}>
                    <ProjectImage fileName = {this.props.node.imageName} alt = {this.props.node.title} style = {projectImageStyle} />
                  </div>
                </div>
            </div>
        )
    }
}

const squareWrapperStyle = {
    width: '500px',
    margin: '10px 10px 40px 10px',
    height: '400px',
    borderRadius: '2px',
    backgroundColor: '#d1d1d1',
    overflow: 'hidden',
    position: 'relative',
}

const innerProjectStyle = {
  width: '320px',
  height: '320px',
  margin: '40px auto',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between'
}

const typeStyle = {
  fontFamily: 'Raleway',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.2em',

  color: '#f5cc38',

  margin: '4px 0px 10px 0px'
}

const bottomStyle = {
    padding: '10px 10px 10px 10px',
}

const titleStyle = {
    fontFamily: 'Raleway',
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: '1.2em',
    margin: '0em 0em 0.4em 0em'
}

const summaryStyle = {
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.2em',
}

const imageHolder = {
  position: 'relative',
  bottom: '0px',
  height: '160px',
  overflow: 'hidden'
}

const projectImageStyle = {
  position: 'relative',
  bottom: '-10px',
  width: '100%',
  objectFit: 'cover',
}

export default ProjectSquare