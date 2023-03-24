import * as React from "react";

import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.461 6.579V4.696a.944.944 0 00-.941-.94.944.944 0 00-.941.94V6.58H4.696a.944.944 0 00-.94.941c0 .518.423.941.94.941H6.58v1.883c0 .517.423.94.94.94a.944.944 0 00.942-.94V8.46h1.882a.944.944 0 00.942-.941.944.944 0 00-.942-.941H8.461zm7.115 7.002l-2.513-2.522a6.531 6.531 0 001.045-3.539A6.583 6.583 0 007.52.932 6.583 6.583 0 00.932 7.52a6.583 6.583 0 006.588 6.588 6.563 6.563 0 003.539-1.045l2.522 2.513a1.41 1.41 0 101.995-1.995zM7.52 12.226A4.708 4.708 0 012.814 7.52 4.708 4.708 0 017.52 2.814a4.708 4.708 0 014.706 4.706 4.708 4.708 0 01-4.706 4.706z"
        fill="currentcolor"
      />
    </svg>
  );
}

const ActionZoomInIcon = convertIcon(Icon, "action-zoom-in");
export default ActionZoomInIcon;
