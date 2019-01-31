import React from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'
import HorizontalRule from '../components/HorizontalRule'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const disqusShortname = 'beadey-com'
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <h1
          style={{
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.title}
        </h1>
        <HorizontalRule />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <HorizontalRule />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: `0 0 ${rhythm(3)}`,
          }}
        >
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                style={{ color: `#333` }}
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" style={{ color: `#333` }}>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
