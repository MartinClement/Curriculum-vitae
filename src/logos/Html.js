import React from 'react'

export default props => (
  <svg viewBox="0 0 112 112" fill="none" {...props}>
    <circle
      cx="56"
      cy="56"
      r="54.5"
      fill="none"
      stroke={props.color ? props.color : 'white'}
      strokeWidth="3"
    />
    <path
      d="M28.9316 69H25.5391V57.1699H12.6367V69H9.26172V43.4062H12.6367V54.4102H25.5391V43.4062H28.9316V69ZM52.082 46.1836H43.8555V69H40.498V46.1836H32.2891V43.4062H52.082V46.1836ZM60.2383 43.4062L68.6055 64.2891L76.9727 43.4062H81.3496V69H77.9746V59.0332L78.291 48.2754L69.8887 69H67.3047L58.9199 48.3281L59.2539 59.0332V69H55.8789V43.4062H60.2383ZM90.7012 66.2402H102.83V69H87.3086V43.4062H90.7012V66.2402Z"
      fill={props.color ? props.color : 'white'}
    />
  </svg>
)
