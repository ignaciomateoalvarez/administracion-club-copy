import { SVGProps } from "react"

const TransactionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#454C52"
      d="M13.999 9.43H1.572a.143.143 0 0 0-.143.142v1.071c0 .079.064.143.143.143h10.807l-2.577 3.268a.144.144 0 0 0 .113.232h1.294c.088 0 .17-.039.225-.109l3.015-3.823a.572.572 0 0 0-.45-.925Zm.43-4.215H3.622l2.577-3.268a.144.144 0 0 0-.113-.232H4.791c-.087 0-.17.04-.225.109L1.552 5.647A.571.571 0 0 0 2 6.572H14.43a.143.143 0 0 0 .143-.143V5.358a.143.143 0 0 0-.143-.143Z"
    />
  </svg>
)
export default TransactionsIcon;
