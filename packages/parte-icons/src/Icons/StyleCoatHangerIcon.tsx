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
        d="M6.33337 4.33329C6.33337 3.41283 7.07957 2.66663 8.00004 2.66663C8.92051 2.66663 9.66671 3.41283 9.66671 4.33329C9.66671 5.25376 8.92051 5.99996 8.00004 5.99996V7.33329"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 12H1.33337C1.33337 10.3334 3.33337 7.33337 8.00004 7.33337C12.6667 7.33337 14.6667 10.3334 14.6667 12Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleCoatHangerIcon = convertIcon(Icon, "style-coat-hanger");
export default StyleCoatHangerIcon;
