import React, { SVGAttributes } from "react";

export const MinusCircleIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_263_4834)">
        <circle
          cx="7.99998"
          cy="8"
          r="6.66667"
          stroke="#506271"
          strokeWidth="1.2"
        />
        <path
          d="M10 8H6"
          stroke="#506271"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_263_4834">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
