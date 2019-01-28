import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, description } = data.site.siteMetadata
        return (
          <React.Fragment>
            <p>{description}</p>
            <p>
              Posts by {author}.{` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                His twitter is not cool
              </a>
              .
            </p>
            <hr />
          </React.Fragment>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
