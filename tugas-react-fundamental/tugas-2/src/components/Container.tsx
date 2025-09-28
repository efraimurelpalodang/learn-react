import type { ContainerProps } from "../ts/types";

export default function Container({children, style, className} :ContainerProps) {
  return (
    <div className={className} style={{marginBlock: "100px", ...((style && typeof style === 'object') ? style : {})}}>
      {children}
    </div>
  )
}