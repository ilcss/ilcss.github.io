import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import ContentSquare from '../index/featured/contentSquare'

import MediaQuery from 'react-responsive'

function LoadResearch() {
    const data = useStaticQuery(graphql`
        query ResearchQuery {
            research: allContentElement(filter: {type: {eq: "publication"}},
                                        sort: { fields: date, order: DESC }) {
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

    return(
        <>
        { data.research.edges.map(({ node }) => (
            <>
                <ContentSquare node = {node} />
            </>
        )) }
        </>
    )
}

class Research extends Component {
    render() {
        return(
            <>
            <MediaQuery minWidth = {500}>
            <div style = {componentWrapper}>
                <div style = {researchHeader}>
                    Research
                </div>

                <div style = {squaresHolder}>
                    <LoadResearch />
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <div style = {componentWrapper}>
                <div style = {researchHeaderMobile}>
                    Research
                </div>

                <div style = {squaresHolder}>
                    <LoadResearch />
                </div>
            </div>
            </MediaQuery>
            
            </>
        )
    }
}

const componentWrapper = {
    width: '100%',
    backgroundColor: '#f5f5f5',
}


const researchHeader = {
    maxWidth: '900px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
}

const researchHeaderMobile = {
    ...researchHeader,
    paddingTop: '40px',
    fontSize: '28px',
}

const squaresHolder = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    width: '90%',

    margin: 'auto',
    padding: '40px 0px 60px 0px'
}



export default Research