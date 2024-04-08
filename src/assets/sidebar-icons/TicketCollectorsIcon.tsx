import { SVGProps } from "react"

const TicketCollectorsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#454C52"
      d="M5.417 1.333A1.417 1.417 0 0 0 4 2.75v10.5a1.417 1.417 0 0 0 1.417 1.417h5.166A1.417 1.417 0 0 0 12 13.25V2.75a1.417 1.417 0 0 0-1.417-1.417H5.417ZM4.833 2.75c0-.322.262-.583.584-.583h5.166c.323 0 .584.261.584.583v10.5a.583.583 0 0 1-.584.584H5.417a.583.583 0 0 1-.584-.584V2.75Zm2.25 9.084a.417.417 0 0 0 0 .833h1.834a.417.417 0 0 0 0-.833H7.083Z"
    />
  </svg>
)
export default TicketCollectorsIcon;
