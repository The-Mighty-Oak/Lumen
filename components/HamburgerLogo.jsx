import React from 'react'

const HamburgerLogo = () => {
  return (
    <div>
      <svg className='hamburgerLogo' role="img" aria-label="Lumen Logo"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
          viewBox="0 0 200 63.387">
          <g
              transform="translate(-168 -143.613)">
              <g
                  transform="translate(168 143.613)">
                      <path className='hamburgerLogo'
                      d="M2430.378,2428.79v4.527h-28.061a18.941,18.941,0,0,0-5.008-15.24,19.349,19.349,0,0,0-3.48-2.9,18.7,18.7,0,0,0-20.693.217,18.933,18.933,0,0,0-8.162,17.927h-28.6v-4.527h24.062a23.366,23.366,0,0,1,6.1-13.632l-19.275-19.365,3.182-3.2,19.46,19.546a23.109,23.109,0,0,1,11.484-4.4v-28.81h4.506v28.81a23.124,23.124,0,0,1,11.175,4.175L2416.3,2392.6l3.187,3.2-19,19.087a23.36,23.36,0,0,1,6.359,13.91Z"
                      transform="translate(-2336.378 -2378.93)"
                      fill="#050606" />
              </g>

                <text className='hamburgerLogo'
                  transform="translate(276 199)"
                  fill="#050606"
                  fontSize="33"
                  fontFamily="Gilroy-Light, Gilroy"
                  fontWeight="300">

                  <tspan
                      x="0"
                      y="0">

                      lumen

                  </tspan>

              </text>

          </g>
        </svg>
    </div>
  )
}

export default HamburgerLogo