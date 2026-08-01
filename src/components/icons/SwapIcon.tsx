import type { IconProps } from "./IconProps";

export function SwapIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}