import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}


class Person extends Component {
    render() {

        console.log("Logging")
        console.log(this.props.node.imageName);

        return(
            <div style = {personWrapper}>
                <div style = {headshotWrapper}>
                    <Headshot fileName = {this.props.node.imageName} alt = {this.props.node.name} style = {headshotImage} />
                </div>
                <div style = {textWrapper}>
                    <p style = {nameText}>{ this.props.node.name }</p>
                    <p style = {bioText}>
                        { this.props.node.bio }
                    </p>
                    <p style = {linkText}>
                        Personal Homepage
                    </p>
                </div>
            </div>
        )
    }
}

const personWrapper = {
    margin: '30px auto 20px auto',
    width: '70%',

    display: 'flex',
    flexFlow: 'row nowrap'
}

const headshotWrapper = {
    width: '300px',
    height: '300px',
    flexShrink: '0',
    overflow: 'hidden'
}

const headshotImage = {
    width: '100%',
    height: '100%',
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

const linkText = {
    textAlign: 'left',

    fontFamily: 'Raleway',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.2em',

    color: '#3896f5',

    position: 'absolute',
    bottom: '4px'
}

export default Person