import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import MediaQuery from 'react-responsive'

const Headshot = ({ fileName, alt, style }) => {
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

  let fluid;

    try {
      fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
        .fluid
    } catch(err) {
      fluid = null
    }
 
  return (
    <>
      <Img fluid={fluid} alt={alt} style={style} />
    </>
  )
}


class Person extends Component {

    render() {

      const websiteLink = ( this.props.node.website === "" ? 
        <></> : 
        <a href = {this.props.node.website} target = "_blank" style = {aLinkStyle}>
          <p style = {linkText}>
            Personal Homepage
          </p> 
        </a>
      )

        return(
          <>
          <MediaQuery minWidth = {500}>
            <div style = {personWrapper}>
                <MediaQuery minWidth = {920}>
                <div style = {headshotWrapper}>
                    <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
                </div>
                </MediaQuery>
                <MediaQuery maxWidth = {919}>
                <div style = {headshotWrapperMed}>
                    <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
                </div>
                </MediaQuery>
                <div style = {textWrapper}>
                    <p style = {nameText}>{ this.props.node.name }</p>
                    <p style = {bioText}>
                        { this.props.node.bio }
                    </p>
                    {websiteLink}
                </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth = {499}>
          <div style = {personWrapperMobile}>
              <div style = {headshotWrapperMobile}>
                  <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
              </div>
              <div style = {textWrapperMobile}>
                  <p style = {nameText}>{ this.props.node.name }</p>
                  <p style = {bioText}>
                      { this.props.node.bio }
                  </p>
                  {websiteLink}
              </div>
          </div>
          </MediaQuery>
          </>
        )
    }
}

const personWrapper = {
    margin: '30px auto 20px auto',
    padding: '0px 20px 0px 20px',
    maxWidth: '1080px',

    display: 'flex',
    flexFlow: 'row nowrap',
}

const personWrapperMobile = {
  ...personWrapper,
  flexFlow: 'column nowrap'
}

const headshotWrapper = {
    width: '300px',
    height: '300px',
    flexShrink: '0',
    overflow: 'hidden'
}

const headshotWrapperMed = {
  width: '180px',
  height: '280px',
  flexShrink: '0',
  borderRadius: '2px',
  overflow: 'hidden',
}

const headshotWrapperMobile = {
  width: '100%',
  height: '320px',
  borderRadius: '2px',
  overflow: 'hidden'
}

const headshotImage = {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
}

const textWrapper = {
    padding: '0px 10px 10px 20px',
    position: 'relative'
}

const textWrapperMobile = {
  padding: '10px 0px 10px 0px',
  position: 'relative'
}

const nameText = {
    textAlign: 'left',
    
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.2em',
}

const bioText = {
    textAlign: 'left',
    marginTop: '16px',

    fontFamily: 'Raleway',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.35em',
}

const linkText = {
    textAlign: 'left',

    fontFamily: 'Raleway',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.2em',

    color: '#3896f5',
    marginTop: '10px'
}

const aLinkStyle = {
  textDecoration: 'none',
  color: '#3896f5',
}

export default Person