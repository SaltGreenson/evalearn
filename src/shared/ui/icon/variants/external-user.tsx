import React, { SVGAttributes } from "react";

export const ExternalUserIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.11111"
        cy="3.99999"
        r="2.66667"
        stroke="#506271"
        strokeWidth="1.2"
      />
      <path
        d="M9.3721 9C8.70229 8.78762 7.93142 8.66667 7.11111 8.66667C4.53378 8.66667 2.44444 9.86058 2.44444 11.3333C2.44444 12.8061 4.53378 14 7.11111 14C7.93142 14 8.70229 13.8791 9.3721 13.6667"
        stroke="#506271"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 11.5H13.5M13.5 11.5L11.5 9.5M13.5 11.5L11.5 13.5"
        stroke="#506271"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
