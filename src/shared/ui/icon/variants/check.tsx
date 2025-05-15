import React, { SVGAttributes } from "react";

export const CheckIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5064 4.69464C14.7872 4.93981 14.8161 5.36622 14.571 5.64705L7.94149 13.2408C7.8133 13.3876 7.62791 13.4719 7.433 13.4719C7.23809 13.4719 7.05269 13.3876 6.92451 13.2408L4.27272 10.2033C4.02755 9.92247 4.05646 9.49606 4.33729 9.25089C4.61812 9.00572 5.04453 9.03463 5.2897 9.31546L7.433 11.7705L13.554 4.75921C13.7991 4.47838 14.2255 4.44947 14.5064 4.69464Z"
        fill="#06193C"
      />
    </svg>
  );
};
