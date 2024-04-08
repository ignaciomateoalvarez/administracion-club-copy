import { SVGProps } from "react"

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#454C52"
      d="M15.76 7.874 8.86.978 8.397.514a.563.563 0 0 0-.792 0L.242 7.874a1.141 1.141 0 0 0-.336.821c.007.629.53 1.13 1.16 1.13h.758v5.817h12.354V9.826h.775a1.138 1.138 0 0 0 1.057-.707 1.136 1.136 0 0 0-.25-1.245ZM9 14.356h-2v-3.643h2v3.643Zm3.891-5.816v5.816h-2.748v-4.071a.714.714 0 0 0-.714-.715H6.572a.714.714 0 0 0-.714.715v4.071H3.11V8.54H1.396l6.607-6.602.412.413 6.193 6.189h-1.716Z"
    />
  </svg>
)
export default HomeIcon
