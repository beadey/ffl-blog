import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, description } = data.site.siteMetadata
        return (
          <React.Fragment>
            <p style={{ backgroundColor: `white` }}>{description}</p>
            <p style={{ backgroundColor: `white` }}>
              Posts by {author}.{` `}
              <a
                href={`https://twitter.com/${social.twitter}`}
                style={{ color: `#333` }}
              >
                His twitter is nothing special
              </a>
              .
            </p>
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
