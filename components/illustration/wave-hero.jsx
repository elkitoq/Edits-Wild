import * as React from "react"

function WaveHero(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 155" {...props}>
      <path
        fill="hwb(245deg 82% 8%)"
        d="M0 64l48 16c48 16 144 48 240 42.7 96-5.7 192-47.7 288-64C672 43 768 53 864 69.3 960 85 1056 107 1152 96c96-11 192-53 240-74.7L1440 0v320H288c-96-220-192 0-240 0H0z"
      />
    </svg>
  )
}

export default WaveHero