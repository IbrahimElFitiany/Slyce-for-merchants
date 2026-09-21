import type { IconProps } from "./IconProps";

export function CancelledIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
      <path d="M18 18L6 6" stroke={color} strokeWidth="2" />
    </svg>
  );
}