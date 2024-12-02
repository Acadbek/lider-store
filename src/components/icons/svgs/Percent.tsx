import * as React from "react";
import type { SVGProps } from "react";
const SvgPercent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.5 11q-1.45 0-2.475-1.025T4 7.5t1.025-2.475T7.5 4t2.475 1.025T11 7.5 9.975 9.975 7.5 11m0-2q.625 0 1.063-.437T9 7.5t-.437-1.062T7.5 6t-1.062.438T6 7.5t.438 1.063T7.5 9m9 11q-1.45 0-2.475-1.025T13 16.5t1.025-2.475T16.5 13t2.475 1.025T20 16.5t-1.025 2.475T16.5 20m0-2q.625 0 1.063-.437T18 16.5t-.437-1.062T16.5 15t-1.062.438T15 16.5t.438 1.063T16.5 18M4.7 19.3q-.275-.275-.275-.7t.275-.7L17.9 4.7q.275-.275.7-.275t.7.275.275.7-.275.7L6.1 19.3q-.275.275-.7.275t-.7-.275"
    />
  </svg>
);
export default SvgPercent;