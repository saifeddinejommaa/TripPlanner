import * as React from "react"
import { SVGProps } from "react"
const EditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    {...props}
  >
    <path
      fill="#718096"
      fillRule="evenodd"
      d="M19.775 2a3.1 3.1 0 0 0-2.191.907h-.001l-1.268 1.264a1.005 1.005 0 0 0-.267.266L9.17 11.292a1 1 0 0 0-.294.708v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .708-.294l6.855-6.88a1 1 0 0 0 .266-.266l1.263-1.268A3.1 3.1 0 0 0 19.776 2Zm-8.9 10.415 6.011-5.99L18.45 7.99 12.46 14h-1.585v-1.585Zm7.428-7.401 1.558 1.558.69-.693.002-.001a1.1 1.1 0 0 0-1.556-1.556l-.001.001-.693.69ZM6.875 6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1a1 1 0 1 0-2 0v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 0 0-2h-1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default EditIcon