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
      d="M19 35L56 22L92.5 35L86 82L56 97L26 82L19 35Z"
      fill={props.color ? props.color : '#dd0031'}
    />
    <path
      d="M71.2846 81C71.0546 80.494 70.7326 79.758 70.3186 78.792C69.9046 77.826 69.4216 76.722 68.8696 75.48C68.3636 74.192 67.7886 72.812 67.1446 71.34C66.5466 69.822 65.9256 68.258 65.2816 66.648H47.6176L41.6836 81H34.2316L56.5186 28.629C56.7946 29.273 57.2776 30.446 57.9676 32.148C58.7036 33.85 59.5546 35.897 60.5206 38.289C61.5326 40.635 62.6366 43.257 63.8326 46.155C65.0746 49.007 66.3166 51.905 67.5586 54.849C68.8466 57.793 70.0886 60.691 71.2846 63.543C72.5266 66.395 73.6536 69.017 74.6656 71.409C75.6776 73.801 76.5286 75.848 77.2186 77.55C77.9546 79.206 78.4606 80.356 78.7366 81H71.2846ZM50.2396 60.3H62.7286C62.0846 58.782 61.4636 57.333 60.8656 55.953C60.3136 54.527 59.7846 53.239 59.2786 52.089C58.8186 50.893 58.4046 49.858 58.0366 48.984C57.6686 48.11 57.3926 47.42 57.2086 46.914C57.1626 46.822 57.0476 46.5 56.8636 45.948C56.7256 45.396 56.6106 44.89 56.5186 44.43C56.4266 44.89 56.2886 45.396 56.1046 45.948C55.9206 46.5 55.8056 46.822 55.7596 46.914L50.2396 60.3Z"
      fill="white"
    />
  </svg>
)
