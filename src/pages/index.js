import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import HorizontalRule from '../components/HorizontalRule'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `tv writing`, `animation`, `comedy`]}
        />
        <Bio />
        <HorizontalRule />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: `#333` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <p
                style={{
                  ...scale(-1 / 4),
                  display: `block`,
                }}
              >
                {node.frontmatter.date}
              </p>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <hr />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
