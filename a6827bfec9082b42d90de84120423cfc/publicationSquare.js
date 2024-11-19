import React, { Component } from 'react'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Moment from 'moment'

const PublicationImage = ({ fileName, alt, style }) => {
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


class PublicationSquare extends Component {

    constructor(props) {
        super(props);
        this.titleRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.titleRef.current.style.textDecoration = 'underline'
    }

    handleStopHover() {
        this.titleRef.current.style.textDecoration = 'none'
    }

    render() {
        return(
            <div style = {squareWrapperStyle}>
                <a href = {`${__dirname}/src/assets/files/${this.props.node.fileName}`} target = "_blank" >
                <div style = {publicationStyle} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover}>
                    <div style = {publicationImageContainer}>
                        <PublicationImage fileName = {this.props.node.imageName} alt = {this.props.node.title} style = {publicationImageStyle} />
                    </div>
                    <div style = {publicationText}>
                    <p style = {titleStyle} ref = {this.titleRef}>
                        { this.props.node.title }
                    </p>
                    <p style = {summaryStyle}>
                        { this.props.node.summary }
                    </p>
                    
                    <div style = {detailsBox}>
                        <p style = {authorsStyle}>
                            { this.props.node.authors }
                        </p>
                        <p style = {journalStyle}>
                            <b>{ this.props.node.status }{ this.props.node.journal } </b>| {Moment(this.props.node.date).format('DD MMM YYYY')}
                        </p>
                    </div>
                    </div>
                </div>
                </a>
            </div>
        )
    }
}

const squareWrapperStyle = {
    width: '340px',
    margin: '10px 10px 40px 10px',
    minHeight: '560px',
    borderRadius: '2px',
}

const publicationStyle = {
    width: '300px',
    minHeight: '560px',
    margin: '10px auto',
    padding: '0px 0px 6px 0px',
    borderBottom: '1px #aaa solid',

    display: 'flex',
    flexFlow: 'column nowrap',

    cursor: 'pointer'
}

const publicationImageContainer = {
    width: '100%',
    height: '180px',
    border: '1px #aaa solid',
    overflow: 'hidden'
}

const publicationImageStyle = {
    height: '180px',
    width: '100%',
    objectFit: 'contain'
}

const publicationText = {
    padding: '10px 0px 6px 0px',
    position: 'relative',
    flexGrow: '1'
}

const titleStyle = {
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.35em',
    margin: '0em 0em 0.4em 0em'
}

const summaryStyle = {
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '1.35em',
    color: 'black',
    margin: '0em 0em 1.4em 0em'
}

const detailsBox = {
    position: 'absolute',
    bottom: '0'
}

const authorsStyle = {
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '1.35em',
    color: '#666'
}

const journalStyle = {
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '1.35em',
}



export default PublicationSquare