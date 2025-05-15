import React, { SVGAttributes } from "react";

export const ArrowLeftIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
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
        d="M7.04379 3.62288C7.25207 3.83116 7.25207 4.16884 7.04379 4.37712L3.95424 7.46667H13.3333C13.6279 7.46667 13.8667 7.70545 13.8667 8C13.8667 8.29455 13.6279 8.53333 13.3333 8.53333H3.95424L7.04379 11.6229C7.25207 11.8312 7.25207 12.1688 7.04379 12.3771C6.83551 12.5854 6.49782 12.5854 6.28954 12.3771L2.28954 8.37712C2.08126 8.16884 2.08126 7.83116 2.28954 7.62288L6.28954 3.62288C6.49782 3.4146 6.83551 3.4146 7.04379 3.62288Z"
        fill="#506271"
      />
    </svg>
  );
};
