import * as React from "react";

const SearchIcon = ({
  height = "19px",
  width = "18px",
  color = "#5b6770",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.7264 16.4767L15.2058 13.1652C18.0146 9.88416 17.627 4.95134 14.3392 2.14824C14.3075 2.12184 14.2757 2.09411 14.244 2.0677C10.812 -0.801412 5.77788 -0.670697 2.50205 2.3727C-0.66529 5.30519 -0.850515 10.2459 2.08926 13.4068C2.11969 13.4399 2.15012 13.4715 2.18188 13.5045C5.29365 16.713 10.3132 17.1051 13.8868 14.4182L17.3796 17.7336C17.7579 18.0888 18.348 18.0888 18.7277 17.7336C19.0757 17.4035 19.0929 16.8569 18.7635 16.5083C18.7529 16.4965 18.741 16.4859 18.7277 16.4767H18.7264ZM8.56154 14.4169C4.98538 14.5054 2.01253 11.6878 1.91727 8.11753C2.01121 4.54863 4.98406 1.72969 8.56154 1.81816C12.1377 1.72969 15.1106 4.54731 15.2058 8.11753C15.1119 11.6864 12.139 14.5054 8.56154 14.4169Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;