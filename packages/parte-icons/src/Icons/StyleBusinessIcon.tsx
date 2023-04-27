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
        d="M8.00004 6.66671C9.4728 6.66671 10.6667 5.4728 10.6667 4.00004C10.6667 2.52728 9.4728 1.33337 8.00004 1.33337C6.52728 1.33337 5.33337 2.52728 5.33337 4.00004C5.33337 5.4728 6.52728 6.66671 8.00004 6.66671Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.6666C14 11.3529 11.3137 8.66663 8 8.66663C4.6863 8.66663 2 11.3529 2 14.6666"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99996 14.6666L9.33329 13L7.99996 8.66663L6.66663 13L7.99996 14.6666Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleBusinessIcon = convertIcon(Icon, "style-business");
export default StyleBusinessIcon;
