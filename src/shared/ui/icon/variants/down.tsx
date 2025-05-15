import React, { SVGAttributes } from "react";

export const DownIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 9L12 14L17 9"
        stroke="#506271"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
