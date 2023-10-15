import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import MediaQuery from 'react-responsive'

const Headshot = ({ fileName, alt, style }) => {
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

  let fluid;

    try {
      fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
        .fluid
    } catch(err) {
      fluid = null
    }
 
  return (
    <Img fluid={fluid} alt={alt} style={style} />
  )
}


class LAPerson extends Component {
    render() {

        console.log("Logging")
        console.log(this.props.node.imageName);

        return(
          <>
            <MediaQuery minWidth = {680}>
            <div style = {personWrapper}>
                <div style = {headshotWrapper}>
                    <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
                </div>
                <div style = {textWrapper}>
                    <p style = {nameText}>{ this.props.node.name }</p>
                    <p style = {bioText}>
                        { this.props.node.bio }
                    </p>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {679} minWidth = {500}>
            <div style = {personWrapperMed}>
                <div style = {headshotWrapperMed}>
                    <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
                </div>
                <div style = {textWrapper}>
                    <p style = {nameText}>{ this.props.node.name }</p>
                    <p style = {bioText}>
                        { this.props.node.bio }
                    </p>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499} >
            <div style = {personWrapperMobile}>
                <div style = {headshotWrapperMobile}>
                    <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
                </div>
                <div style = {textWrapper}>
                    <p style = {nameText}>{ this.props.node.name }</p>
                    <p style = {bioText}>
                        { this.props.node.bio }
                    </p>
                </div>
            </div>
            </MediaQuery>
            </>
        )
    }
}

const personWrapper = {
    margin: '30px 0px 20px 0px',
    width: '500px',

    display: 'flex',
    flexFlow: 'row nowrap'
}

const personWrapperMed = {
  ...personWrapper,
  width: '280px',
}

const personWrapperMobile = {
  ...personWrapper,
  width: '90%',
}

const headshotWrapper = {
    width: '200px',
    height: '200px',
    flexShrink: '0',
    overflow: 'hidden'
}

const headshotWrapperMed = {
  width: '120px',
  height: '200px',
  flexShrink: '0',
  overflow: 'hidden',
  borderRadius: '2px',
  backgroundColor: 'blue'
}

const headshotWrapperMobile = {
    width: '160px',
    height: '200px',
    flexShrink: '0',
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


export default LAPerson