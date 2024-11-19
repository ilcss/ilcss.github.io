import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ProjectImage = ({ fileName, alt, style }) => {
    const { allImageSharp } = useStaticQuery(graphql`
      query {
        allImageSharp {
          nodes {
            fluid {
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

class Project extends Component {
    render() {

        console.log("Logging")
        console.log(this.props.node.imageName);

        return(
            <div style = {projectWrapper}>
                <div style = {projectImageWrapper}>
                    <ProjectImage fileName = {this.props.node.imageName} alt = {this.props.node.title} style = {projectImageStyle} />
                </div>
                <div style = {imageCover}>
                </div>
                <div style = {textContent}>
                    <p style = {titleText}>
                        {this.props.node.title}
                    </p>
                </div>
            </div>
        )
    }
}

const projectWrapper = {
    margin: '0px auto 0px auto',

    display: 'flex',
    flexFlow: 'row nowrap',

    backgroundColor: '#F2CA7E',
    position: 'relative',
    overflow: 'hidden'
}

const projectImageWrapper = {
    width: '100%',
    height: '340px',
    flexShrink: '0',
    backgroundColor: 'orange'
}

const projectImageStyle = {
    height: '340px',
    width: '100%',
    objectFit: 'cover'
}

const imageCover = {
    height: '340px',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#222',
    opacity: '0.65'
}

const textContent = {
    position: 'absolute',
    zIndex: '10000'
}

const titleText = {
    color: 'white',
    
    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '300',
    lineHeight: '1.2em',
    margin: '10px 10px 10px 10px'
}

export default Project