import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import ContentSquare from './contentSquare'

function LoadContent() {
    const data = useStaticQuery(graphql`
        query DataQuery {
            allContentElement(
                filter: {type: {eq: "publication"}},
                sort: { fields: date, order: DESC },
                limit: 8
            ) {
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
        { data.allContentElement.edges.map(({ node }) => (
            <>
                <ContentSquare node = {node} />
            </>
        )) }
        </>
    )
}

class Featured extends Component {
    render() {
        return(
            <div style = {componentWrapper}>
                <div style = {missionText}>
                    We are the Interdisciplinary Laboratory of Computational Social Science
                </div>
                <div style = {missionText}>
                    View our latest research
                </div>

                <div style = {squaresHolder}>
                    <LoadContent />
                </div>
               
            </div>
        )
    }
}

const componentWrapper = {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingTop: '50px'
}


const missionText = {
    width: '700px',
    margin: 'auto',
    paddingBottom: '30px',

    fontFamily: 'Raleway',
    fontSize: '34px',
    fontWeight: '400',
    lineHeight: '1.2em',

    textAlign: 'center',
}

const squaresHolder = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    maxWidth: '1600px',

    margin: 'auto',
    padding: '20px 0px 60px 0px',

    borderTop: '1px #aaa solid'
}



export default Featured