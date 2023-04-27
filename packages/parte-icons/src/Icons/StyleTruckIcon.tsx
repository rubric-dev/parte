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
        d="M3.99996 13C4.73633 13 5.33329 12.4031 5.33329 11.6667C5.33329 10.9303 4.73633 10.3334 3.99996 10.3334C3.26358 10.3334 2.66663 10.9303 2.66663 11.6667C2.66663 12.4031 3.26358 13 3.99996 13Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 13C12.4031 13 13 12.4031 13 11.6667C13 10.9303 12.4031 10.3334 11.6667 10.3334C10.9303 10.3334 10.3334 10.9303 10.3334 11.6667C10.3334 12.4031 10.9303 13 11.6667 13Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M2.66663 11.6666H0.666626V3.66663H10.3333V11.6666H5.33329"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3334 11.6667V6H13.1905L15.3334 8.83333V11.6667H13.2704"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleTruckIcon = convertIcon(Icon, "style-truck");
export default StyleTruckIcon;
