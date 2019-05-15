import React from 'react'

export default props => (
  <svg viewBox="0 0 112 112" fill="none" {...props}>
    <circle cx="56" cy="56" r="54.5" fill="none" stroke={props.color || 'white'} stroke-width="3" />
    <rect
      x="31.0124"
      y="24"
      width="66.0955"
      height="6.99542"
      transform="rotate(35 31.0124 24)"
      fill={props.color || 'white'}
    />
    <rect
      x="45.7373"
      y="88.979"
      width="50"
      height="7"
      transform="rotate(-90 45.7373 88.979)"
      fill={props.color || 'white'}
    />
    <circle cx="49.2358" cy="41.979" r="9" fill={props.color || 'white'} />
    <circle cx="49.7373" cy="88.979" r="9" fill={props.color || 'white'} />
    <ellipse cx="85.2358" cy="67.479" rx="9" ry="9.5" fill={props.color || 'white'} />
  </svg>
)
