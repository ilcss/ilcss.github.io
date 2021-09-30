import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import ContentSquare from '../index/featured/contentSquare'

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
                        authors
                        pageLink
                        project
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
            <div style = {componentWrapper}>
                <div style = {researchHeader}>
                    Research
                </div>

                <div style = {squaresHolder}>
                    <LoadResearch />
                </div>
               
            </div>
        )
    }
}

const componentWrapper = {
    width: '100%',
    backgroundColor: '#f5f5f5',
}


const researchHeader = {
    width: '900px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
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