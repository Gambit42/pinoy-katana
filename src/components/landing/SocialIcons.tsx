import type { SVGProps } from 'react'

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export function XBrandIcon({ size = 18, ...props }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.5 6.8 15.3.6h-1.4L8.9 6l-4-5.4H0l6.2 8.2L0 15.5h1.4l5.4-5.9 4.4 5.9H16L9.5 6.8zM2.1 1.6h2.2l9.7 12.9h-2.2L2.1 1.6z" />
    </svg>
  )
}
