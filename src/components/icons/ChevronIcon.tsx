import type { IconProps } from "./IconProps";

type ChevronDirection = "right" | "left" | "up" | "down";

interface ChevronIconProps extends IconProps {
  direction?: ChevronDirection;
}

const ROTATION_MAP: Record<ChevronDirection, string> = {
  right: "rotate-0",
  down: "rotate-90",
  left: "rotate-180",
  up: "-rotate-90",
};

export function ChevronIcon({ className, size = 20, color = "currentColor", direction = "right" }: ChevronIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={`transition-transform duration-200 ${ROTATION_MAP[direction]} ${className}`.trim()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
      />
    </svg>
  );
}