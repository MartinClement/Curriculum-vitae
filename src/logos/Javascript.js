import React from 'react'

export default props => (
  <svg {...props} viewBox="0 0 112 112" fill="none">
    <circle
      cx="56"
      cy="56"
      r="54.5"
      fill="none"
      stroke={props.color ? props.color : 'white'}
      stroke-width="3"
    />
    <path
      d="M42.6875 32.5H48.7188V64.7188C48.7188 69.0729 47.4062 72.4792 44.7812 74.9375C42.1771 77.3958 38.6979 78.625 34.3438 78.625C29.8229 78.625 26.3021 77.4688 23.7812 75.1562C21.2604 72.8438 20 69.6042 20 65.4375H26C26 68.0417 26.7083 70.0729 28.125 71.5312C29.5625 72.9896 31.6354 73.7188 34.3438 73.7188C36.8229 73.7188 38.8229 72.9375 40.3438 71.375C41.8854 69.8125 42.6667 67.625 42.6875 64.8125V32.5ZM72.3438 57.7188C67.1979 56.2396 63.4479 54.4271 61.0938 52.2812C58.7604 50.1146 57.5938 47.4479 57.5938 44.2812C57.5938 40.6979 59.0208 37.7396 61.875 35.4062C64.75 33.0521 68.4792 31.875 73.0625 31.875C76.1875 31.875 78.9688 32.4792 81.4062 33.6875C83.8646 34.8958 85.7604 36.5625 87.0938 38.6875C88.4479 40.8125 89.125 43.1354 89.125 45.6562H83.0938C83.0938 42.9062 82.2188 40.75 80.4688 39.1875C78.7188 37.6042 76.25 36.8125 73.0625 36.8125C70.1042 36.8125 67.7917 37.4688 66.125 38.7812C64.4792 40.0729 63.6562 41.875 63.6562 44.1875C63.6562 46.0417 64.4375 47.6146 66 48.9062C67.5833 50.1771 70.2604 51.3438 74.0312 52.4062C77.8229 53.4688 80.7812 54.6458 82.9062 55.9375C85.0521 57.2083 86.6354 58.6979 87.6562 60.4062C88.6979 62.1146 89.2188 64.125 89.2188 66.4375C89.2188 70.125 87.7812 73.0833 84.9062 75.3125C82.0312 77.5208 78.1875 78.625 73.375 78.625C70.25 78.625 67.3333 78.0312 64.625 76.8438C61.9167 75.6354 59.8229 73.9896 58.3438 71.9062C56.8854 69.8229 56.1562 67.4583 56.1562 64.8125H62.1875C62.1875 67.5625 63.1979 69.7396 65.2188 71.3438C67.2604 72.9271 69.9792 73.7188 73.375 73.7188C76.5417 73.7188 78.9688 73.0729 80.6562 71.7812C82.3438 70.4896 83.1875 68.7292 83.1875 66.5C83.1875 64.2708 82.4062 62.5521 80.8438 61.3438C79.2812 60.1146 76.4479 58.9062 72.3438 57.7188Z"
      fill={props.color ? props.color : 'white'}
    />
  </svg>
)