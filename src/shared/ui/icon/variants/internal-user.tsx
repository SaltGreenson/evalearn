import React, { SVGAttributes } from "react";

export const InternalUserIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
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
        d="M7.11111 14C4.53378 14 2.44444 12.8061 2.44444 11.3333C2.44444 9.86058 4.53378 8.66667 7.11111 8.66667"
        stroke="#506271"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M13.5046 11.5L8.0046 11.5127M8.0046 11.5127L10.0092 13.5081M8.0046 11.5127L10 9.50806"
        stroke="#506271"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
