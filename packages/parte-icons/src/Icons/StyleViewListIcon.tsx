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
        d="M12.6666 1.33337H3.33329C2.9651 1.33337 2.66663 1.63185 2.66663 2.00004V14C2.66663 14.3682 2.9651 14.6667 3.33329 14.6667H12.6666C13.0348 14.6667 13.3333 14.3682 13.3333 14V2.00004C13.3333 1.63185 13.0348 1.33337 12.6666 1.33337Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M7 4.66663H11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8H11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.3334H11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00004 5.33333C5.36824 5.33333 5.66671 5.03487 5.66671 4.66667C5.66671 4.29847 5.36824 4 5.00004 4C4.63184 4 4.33337 4.29847 4.33337 4.66667C4.33337 5.03487 4.63184 5.33333 5.00004 5.33333Z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00004 8.66671C5.36824 8.66671 5.66671 8.36824 5.66671 8.00004C5.66671 7.63184 5.36824 7.33337 5.00004 7.33337C4.63184 7.33337 4.33337 7.63184 4.33337 8.00004C4.33337 8.36824 4.63184 8.66671 5.00004 8.66671Z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00004 12C5.36824 12 5.66671 11.7015 5.66671 11.3333C5.66671 10.9651 5.36824 10.6666 5.00004 10.6666C4.63184 10.6666 4.33337 10.9651 4.33337 11.3333C4.33337 11.7015 4.63184 12 5.00004 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}

const StyleViewListIcon = convertIcon(Icon, "style-view-list");
export default StyleViewListIcon;
