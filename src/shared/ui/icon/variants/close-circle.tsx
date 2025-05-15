import React, { SVGAttributes } from "react";

export const CloseCircleIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_263_4833)">
        <circle
          cx="7.99998"
          cy="8"
          r="6.66667"
          stroke="#506271"
          strokeWidth="1.2"
        />
        <path
          d="M9.66663 6.33333L6.33331 9.66665M6.3333 6.33331L9.66662 9.66663"
          stroke="#506271"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_263_4833">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
