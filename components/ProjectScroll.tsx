import type { ReactNode } from "react";

type ProjectScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function ProjectScroll({ children, className = "" }: ProjectScrollProps) {
  return (
    <div className={`project-scroll ${className}`}>
      <span className="scroll-curl scroll-curl-top" aria-hidden="true" />
      <div className="project-scroll-inner">{children}</div>
      <span className="scroll-curl scroll-curl-bottom" aria-hidden="true" />
    </div>
  );
}
