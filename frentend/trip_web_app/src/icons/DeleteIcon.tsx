import * as React from "react"
import { SVGProps } from "react"
const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    {...props}
  >
    <path
      fill="#718096"
      d="M6.875 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v10Zm3-10h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1Zm6.5-5-.71-.71c-.18-.18-.44-.29-.7-.29h-4.18c-.26 0-.52.11-.7.29l-.71.71h-2.5c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5Z"
    />
  </svg>
)
export default DeleteIcon