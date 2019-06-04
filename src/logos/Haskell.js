import React from 'react'

export default props => (
  <svg viewBox="0 0 112 112" fill="none" {...props}>
    <circle cx={56} cy={56} r={54.5} fill="none" stroke={props.color || 'white'} strokeWidth={3} />
    <g clipPath="url(#prefix__clip0)">
      <path d="M61.223 55h14l19 31H79.838L61.223 55z" fill={props.color || 'white'} />
    </g>
    <g clipPath="url(#prefix__clip1)">
      <path d="M43.223 86h13.949l18.05-31H61.275L43.223 86z" fill={props.color || 'white'} />
    </g>
    <g clipPath="url(#prefix__clip2)">
      <path d="M23.223 86h13.949l18.05-31H41.275L23.223 86z" fill={props.color || 'white'} />
    </g>
    <path d="M23 24.33h14.089l18.233 30.664h-14.09L23 24.33z" fill={props.color || 'white'} />
    <path
      d="M23 24.33h14.089l18.233 30.664h-14.09L23 24.33zM43.223 25h13.949l18.05 30H61.106L43.223 25z"
      fill={props.color || 'white'}
    />
    <defs>
      <clipPath id="prefix__clip0">
        <path fill={props.color || 'white'} transform="translate(61.223 55)" d="M0 0h33v31H0z" />
      </clipPath>
      <clipPath id="prefix__clip1">
        <path
          fill={props.color || 'white'}
          transform="matrix(1 0 0 -1 43.223 86)"
          d="M0 0h32v31H0z"
        />
      </clipPath>
      <clipPath id="prefix__clip2">
        <path
          fill={props.color || 'white'}
          transform="matrix(1 0 0 -1 23.223 86)"
          d="M0 0h32v31H0z"
        />
      </clipPath>
    </defs>
  </svg>
)
