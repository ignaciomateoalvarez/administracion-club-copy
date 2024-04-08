import { SVGProps } from "react"

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M12.078 5h-.805a.172.172 0 0 0-.139.07L8.082 9.279 5.03 5.07A.172.172 0 0 0 4.892 5h-.806c-.07 0-.11.08-.07.136l3.788 5.222c.137.19.419.19.555 0l3.788-5.222A.086.086 0 0 0 12.078 5Z"
    />
  </svg>
)
export default ArrowDownIcon;
