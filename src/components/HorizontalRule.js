import React from 'react'
import { rhythm } from '../utils/typography'

function HorizontalRule() {
  return (
    <hr
      style={{
        border: 0,
        backgroundColor: `rgb(237, 157, 228)`,
        backgroundImage: `linear-gradient(15deg, rgb(237, 157, 228), #dbbced)`,
        height: `15px`,
        marginBottom: `${rhythm(1.5)}`,
      }}
    />
  )
}

export default HorizontalRule
