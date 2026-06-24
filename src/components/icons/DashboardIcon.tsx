type IconProps = {
  className?: string;
  size?: number;
  color?: string;
};

export function DashboardIcon ({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.47 -1.47 23.94 23.94"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />
        <path d="m4.5 11.435v-7.935" />
        <path d="m7.5 11.485v-3.985" />
        <path d="m10.5 11.5v-6" />
      </g>
    </svg>
  );
}