import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import MediaQuery from 'react-responsive'

const ProjectImage = ({ fileName, alt, style }) => {
    const { allImageSharp } = useStaticQuery(graphql`
      query {
        allImageSharp {
          nodes {
            fluid(quality: 80) {
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

    constructor(props) {
        super(props);
        this.coverRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.coverRef.current.style.opacity = '0.4'
    }

    handleStopHover() {
        this.coverRef.current.style.opacity = '0.65'
    }

    render() {

        console.log("Logging")
        console.log(this.props.node.imageName);

        return(
          <>
          <MediaQuery minWidth = {500}>
            <div style = {projectWrapper}>
                <div style = {projectImageWrapper}>
                    <ProjectImage fileName = {this.props.node.imageName} alt = {this.props.node.title} style = {projectImageStyle} />
                </div>
                <div style = {imageCover} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.coverRef}>
                </div>
                <div style = {textContent}>
                <MediaQuery minWidth = {950}>
                    <p style = {titleText}>
                        {this.props.node.title}
                    </p>
                </MediaQuery>
                <MediaQuery maxWidth = {949}>
                    <p style = {titleTextMed}>
                        {this.props.node.title}
                    </p>
                </MediaQuery>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <div style = {projectWrapper}>
                <div style = {projectImageWrapperMobile}>
                    <ProjectImage fileName = {this.props.node.imageName} alt = {this.props.node.title} style = {projectImageStyle} />
                </div>
                <div style = {imageCover} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.coverRef}>
                </div>
                <div style = {textContent}>
                    <p style = {titleTextMed}>
                        {this.props.node.title}
                    </p>
                </div>
            </div>
            </MediaQuery>
            </>
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
}

const projectImageWrapperMobile = {
  ...projectImageWrapper,
  height: '200px',
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

const titleTextMed = {
  ...titleText,

  fontSize: '24px',
}

export default Project