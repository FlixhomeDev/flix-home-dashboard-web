import * as React from 'react'

const ServicesSVG = ({ color = 'black', ...props }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2427 14H10.0002V8.75C10.0002 8.33525 9.66424 8 9.25024 8H4.75024C4.33549 8 4.00024 8.33525 4.00024 8.75V14H1.75024L1.75474 7.68725L6.99874 2.324L12.2502 7.718L12.2427 14ZM5.50024 14H8.50024V9.5H5.50024V14ZM13.3182 6.63875L7.53649 0.725748C7.25374 0.436998 6.74674 0.436998 6.46399 0.725748L0.681494 6.6395C0.407744 6.92075 0.250244 7.31375 0.250244 7.718V14C0.250244 14.8272 0.885494 15.5 1.66624 15.5H4.75024H9.25024H12.3335C13.1142 15.5 13.7502 14.8272 13.7502 14V7.718C13.7502 7.31375 13.5927 6.92075 13.3182 6.63875Z"
      fill={color}
    />
  </svg>
)

export default ServicesSVG
