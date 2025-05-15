import React, { SVGAttributes } from "react";

export const BlockIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_263_4810)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.93334 8C1.93334 4.64948 4.64948 1.93334 8 1.93334C9.45918 1.93334 10.798 2.4485 11.8446 3.30686L3.3068 11.8445C2.44847 10.798 1.93334 9.45915 1.93334 8ZM4.15531 12.6931C5.2019 13.5515 6.54079 14.0667 8 14.0667C11.3505 14.0667 14.0667 11.3505 14.0667 8C14.0667 6.54083 13.5515 5.20197 12.6931 4.15539L4.15531 12.6931ZM8 0.733337C3.98673 0.733337 0.733337 3.98673 0.733337 8C0.733337 12.0133 3.98673 15.2667 8 15.2667C12.0133 15.2667 15.2667 12.0133 15.2667 8C15.2667 3.98673 12.0133 0.733337 8 0.733337Z"
          fill="#506271"
        />
      </g>
      <defs>
        <clipPath id="clip0_263_4810">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
