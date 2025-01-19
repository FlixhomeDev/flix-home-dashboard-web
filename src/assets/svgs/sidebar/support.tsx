import * as React from 'react'

const SupportSvg = ({ color = 'black', ...props }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.8314 3.40851C9.9023 1.87615 8.22315 0.848633 6.30049 0.848633C3.37321 0.848633 1 3.22185 1 6.14997C1 7.11385 1.26133 8.01578 1.71188 8.79469C2.02582 9.38439 1.6737 10.7776 1 11.4505C1.91382 11.4997 3.11867 11.0873 3.65576 10.7386C4.01297 10.9448 4.58061 11.2188 5.32218 11.3588C5.41721 11.3766 5.51903 11.3732 5.61576 11.386"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1818 5.51196C13.2903 5.51196 15 7.22166 15 9.33015C15 10.0251 14.8116 10.6741 14.4875 11.2358C14.261 11.6601 14.5155 12.6638 15 13.1492C14.3416 13.1848 13.4744 12.887 13.0867 12.6367C12.8296 12.7852 12.4206 12.982 11.8861 13.0838C11.6578 13.1271 11.4219 13.15 11.181 13.15C9.07164 13.15 7.36279 11.4403 7.36279 9.33184C7.36279 7.22251 9.07249 5.51366 11.181 5.51366L11.1818 5.51196Z"
      stroke={color}
      strokeWidth="1.27273"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SupportSvg
