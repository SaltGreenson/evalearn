import React, { SVGAttributes } from "react";

export const Logo = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.6091 27.6022C33.4076 4.0192 67.0455 3.79927 88.3671 4.03656C92.7612 4.08546 96.6836 6.82685 98.2288 10.9406C100.521 17.0439 96.769 23.7512 90.2826 24.4099C71.3341 26.3343 57.2995 24.3049 43.609 32.6021C25.3004 43.698 44.1684 58.3015 58.6568 65.7336C59.707 66.2723 59.1987 68.0486 58.0387 67.8304C35.1453 63.5234 -2.05356 51.0052 15.6091 27.6022Z"
        fill="url(#paint0_linear_1364_417)"
      />
      <path
        d="M86.7737 82.2475C70.4673 103.964 39.6612 104.185 20.1082 103.967C16.0509 103.922 12.4302 101.386 11.0098 97.5856C8.90923 91.9646 12.3637 85.7945 18.3335 85.1865C35.6925 83.4183 48.5536 85.2818 61.0995 77.6395C77.6522 67.5564 61.0647 54.3306 47.8623 47.3963C46.8179 46.8477 47.3511 45.0701 48.5092 45.2947C69.5449 49.3758 102.806 60.8968 86.7737 82.2475Z"
        fill="url(#paint1_linear_1364_417)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1364_417"
          x1="81"
          y1="15.5"
          x2="40"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#678AFF" />
          <stop offset="1" stopColor="#1134A8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1364_417"
          x1="26.8143"
          y1="93.4013"
          x2="64.5934"
          y2="57.1895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#678AFF" />
          <stop offset="1" stopColor="#1134A8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
