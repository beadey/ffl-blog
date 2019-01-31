import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#333`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Major Mono Display, monospace`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#333`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundColor: `rgb(45, 0, 72)`,
          backgroundImage: `url(../bg.jpg)`,
          backgroundBlendMode: `color-burn`,
          padding: `${rhythm(2)} 0`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: rhythm(26),
            padding: `${rhythm(1.5)} ${rhythm(2)}`,
            backgroundColor: `white`,
          }}
        >
          {header}
          {children}
          <footer>© {new Date().getFullYear()}, B. Teigh</footer>
        </div>
      </div>
    )
  }
}

export default Layout
