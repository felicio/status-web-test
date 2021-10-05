import React from "react";
import styled from "styled-components";

import { Theme } from "../../styles/themes";

interface ThemeProps {
  theme: Theme;
}

export const TagIcon = ({ theme }: ThemeProps) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      theme={theme}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.48979 5.62329C9.55789 5.21472 9.28187 4.8283 8.87329 4.7602C8.46472 4.6921 8.0783 4.96812 8.0102 5.3767L7.76762 6.8322C7.72743 7.07329 7.51884 7.25 7.27442 7.25H6C5.58579 7.25 5.25 7.58579 5.25 8C5.25 8.41421 5.58579 8.75 6 8.75H6.85775C7.16672 8.75 7.40174 9.02743 7.35095 9.3322L7.10095 10.8322C7.06077 11.0733 6.85217 11.25 6.60775 11.25H5.5C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75H6.19109C6.50006 12.75 6.73508 13.0274 6.68428 13.3322L6.5102 14.3767C6.4421 14.7853 6.71812 15.1717 7.1267 15.2398C7.53527 15.3079 7.92169 15.0319 7.98979 14.6233L8.23237 13.1678C8.27256 12.9267 8.48115 12.75 8.72557 12.75H10.1911C10.5001 12.75 10.7351 13.0274 10.6843 13.3322L10.5102 14.3767C10.4421 14.7853 10.7181 15.1717 11.1267 15.2398C11.5353 15.3079 11.9217 15.0319 11.9898 14.6233L12.2324 13.1678C12.2726 12.9267 12.4811 12.75 12.7256 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H13.1422C12.8333 11.25 12.5982 10.9726 12.649 10.6678L12.899 9.1678C12.9392 8.92671 13.1478 8.75 13.3922 8.75H14.5C14.9142 8.75 15.25 8.41421 15.25 8C15.25 7.58579 14.9142 7.25 14.5 7.25H13.8089C13.4999 7.25 13.2649 6.97257 13.3157 6.6678L13.4898 5.62329C13.5579 5.21472 13.2819 4.8283 12.8733 4.7602C12.4647 4.6921 12.0783 4.96812 12.0102 5.3767L11.7676 6.8322C11.7274 7.07329 11.5188 7.25 11.2744 7.25H9.8089C9.49993 7.25 9.26491 6.97257 9.31571 6.6678L9.48979 5.62329ZM10.6078 11.25C10.8522 11.25 11.0608 11.0733 11.1009 10.8322L11.3509 9.3322C11.4017 9.02743 11.1667 8.75 10.8578 8.75H9.39224C9.14782 8.75 8.93922 8.92671 8.89904 9.1678L8.64904 10.6678C8.59824 10.9726 8.83327 11.25 9.14224 11.25H10.6078Z"
      />
    </Icon>
  );
};

const Icon = styled.svg<ThemeProps>`
  & > path {
    fill: ${({ theme }) => theme.secondary};
  }
`;