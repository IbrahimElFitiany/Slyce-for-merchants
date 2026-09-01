import type { IconProps } from "./IconProps";

type ArrowDirection = "up" | "down" | "left" | "right";

interface ArrowIconProps extends IconProps {
  direction?: ArrowDirection;
}

const ROTATION_MAP: Record<ArrowDirection, string> = {
  up: "rotate-0",
  right: "rotate-90",
  down: "rotate-180",
  left: "-rotate-90",
};

export function ArrowIcon({ className, size = 20, color = "currentColor", direction = "up" }: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`transition-transform duration-200 ${ROTATION_MAP[direction]} ${className}`.trim()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M15.71,5.29l-3-3a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,6.71L11,5.41V21a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,5.29Z"
      />
    </svg>
  );
}