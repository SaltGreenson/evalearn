import React, { SVGAttributes } from "react";

export const ArrowRightIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.95621 12.3771C8.74793 12.1688 8.74793 11.8312 8.95621 11.6229L12.0458 8.53333L2.66667 8.53333C2.37212 8.53333 2.13334 8.29455 2.13334 8C2.13334 7.70545 2.37212 7.46667 2.66667 7.46667L12.0458 7.46667L8.95621 4.37712C8.74793 4.16884 8.74793 3.83116 8.95621 3.62287C9.16449 3.4146 9.50218 3.4146 9.71046 3.62287L13.7105 7.62288C13.9187 7.83116 13.9187 8.16884 13.7105 8.37712L9.71046 12.3771C9.50218 12.5854 9.16449 12.5854 8.95621 12.3771Z"
        fill="#506271"
      />
    </svg>
  );
};
