import { SVGProps } from "react"

const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M13.3 12.117h-.358v-5.06c0-2.1-1.552-3.834-3.571-4.123v-.579a.595.595 0 1 0-1.19 0v.579a4.166 4.166 0 0 0-3.572 4.123v5.06h-.357a.476.476 0 0 0-.477.476v.476a.12.12 0 0 0 .12.12h3.214a1.668 1.668 0 0 0 3.333 0h3.214a.12.12 0 0 0 .12-.12v-.476a.476.476 0 0 0-.477-.476Zm-4.525 1.786a.714.714 0 0 1-.714-.715H9.49c0 .395-.32.715-.715.715ZM5.68 12.117v-5.06c0-.827.322-1.604.906-2.189a3.074 3.074 0 0 1 2.19-.906c.827 0 1.604.322 2.188.906.585.585.907 1.362.907 2.19v5.059H5.68Z"
    />
  </svg>
)
export default BellIcon;