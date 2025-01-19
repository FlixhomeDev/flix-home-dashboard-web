import * as React from 'react'

const LightSvg = ({ color = 'black', ...props }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0.962158V1.81064"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.95 3.01221L12.3501 3.61209"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0001 7.96216H14.1516"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.05005 3.01221L3.64993 3.61209"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 7.96216H1.84848"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0304 7.96209C12.0304 5.45142 9.73526 3.477 7.12872 4.02342C5.54035 4.35603 4.28629 5.68391 4.02496 7.285C3.70169 9.2696 4.83187 11.0328 6.51526 11.7014V13.6894C6.51526 14.1577 6.89538 14.5378 7.36375 14.5378H8.63647C9.10484 14.5378 9.48496 14.1577 9.48496 13.6894V11.7014C10.9741 11.11 12.0304 9.66245 12.0304 7.96209Z"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.21558 11.5681H9.7843"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default LightSvg
