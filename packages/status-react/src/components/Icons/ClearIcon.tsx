import React from "react";
import styled from "styled-components";

type ClearSvgProps = {
  width: number;
  height: number;
  className?: string;
};

export function ClearSvg({ height, width, className }: ClearSvgProps) {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.6868 5.31319C10.8821 5.50846 10.8821 5.82504 10.6868 6.0203L8.94269 7.76442C8.81251 7.89459 8.81251 8.10565 8.94269 8.23582L10.6868 9.97994C10.8821 10.1752 10.8821 10.4918 10.6868 10.687C10.4915 10.8823 10.175 10.8823 9.9797 10.687L8.23558 8.94293C8.10541 8.81276 7.89435 8.81276 7.76417 8.94293L6.02014 10.687C5.82488 10.8822 5.50829 10.8822 5.31303 10.687C5.11777 10.4917 5.11777 10.1751 5.31303 9.97986L7.05707 8.23582C7.18724 8.10565 7.18724 7.89459 7.05707 7.76442L5.31303 6.02038C5.11777 5.82512 5.11777 5.50854 5.31303 5.31328C5.50829 5.11801 5.82488 5.11801 6.02014 5.31328L7.76418 7.05731C7.89435 7.18749 8.10541 7.18749 8.23558 7.05731L9.9797 5.31319C10.175 5.11793 10.4915 5.11793 10.6868 5.31319Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99992 14.6668C11.6818 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668ZM7.99992 13.6668C11.1295 13.6668 13.6666 11.1298 13.6666 8.00016C13.6666 4.87055 11.1295 2.3335 7.99992 2.3335C4.87031 2.3335 2.33325 4.87055 2.33325 8.00016C2.33325 11.1298 4.87031 13.6668 7.99992 13.6668Z"
      />
    </Icon>
  );
}

<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11 5C11.2441 5.24408 11.2441 5.63981 11 5.88388L8.88393 8L11 10.1161C11.2441 10.3602 11.2441 10.7559 11 11C10.756 11.2441 10.3602 11.2441 10.1162 11L8.00005 8.88389L5.88393 11C5.63985 11.2441 5.24412 11.2441 5.00005 11C4.75597 10.7559 4.75597 10.3602 5.00005 10.1161L7.11616 8L5.00005 5.88389C4.75597 5.63981 4.75597 5.24408 5.00005 5C5.24412 4.75593 5.63985 4.75593 5.88393 5L8.00005 7.11612L10.1162 5C10.3602 4.75592 10.756 4.75592 11 5Z"
    fill="#939BA1"
  />
</svg>;

export const ClearIcon = () => {
  return <Icon width={16} height={16} />;
};

const Icon = styled.svg`
  fill: ${({ theme }) => theme.tertiary};

  &.profile {
    fill: ${({ theme }) => theme.secondary};
  }

  &.input {
    fill: ${({ theme }) => theme.primary};
  }

  &.profile > path {
    fill: ${({ theme }) => theme.bodyBackgroundColor};
  }

  &.decline {
    fill: ${({ theme }) => theme.redColor};
  }
`;