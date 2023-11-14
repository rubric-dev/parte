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
        d="M9.33325 2H13.9999V6.66667"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.82457V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H6"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9L14 2"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleShareIcon = convertIcon(Icon, "style-share");

export default StyleShareIcon;
