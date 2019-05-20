import React from 'react'

export default props => (
  <svg viewBox="0 0 112 112" fill="none" {...props}>
    <circle cx="56" cy="56" r="54.5" fill="none" stroke={props.color || 'white'} strokeWidth="3" />
    <path d="M55.5 14L91.4401 34.75V76.25L55.5 97L19.5599 76.25V34.75L55.5 14Z" fill="#EB6021" />
    <path
      d="M27 39.2847L55.5 23L84 39.2847V80.2292L75.5902 84.8819V43.9375L59.7049 35.0972V87.2083L55.5 90L51.2951 87.2083V35.0972L35.4098 44.1967V84.8819L27 80.0049V39.2847Z"
      fill="white"
    />
  </svg>
)
