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
        d="M13.3333 7.66671V4.66671L10.3333 1.33337H3.33329C2.9651 1.33337 2.66663 1.63185 2.66663 2.00004V14C2.66663 14.3682 2.9651 14.6667 3.33329 14.6667H7.33329"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 14.6667C12.8061 14.6667 14 13.4728 14 12C14 10.5273 12.8061 9.33337 11.3333 9.33337C9.86053 9.33337 8.66663 10.5273 8.66663 12C8.66663 13.4728 9.86053 14.6667 11.3333 14.6667Z"
        stroke="currentcolor"
        strokeWidth="1.25"
      />
      <path
        d="M11 11V12.3333H12.3333"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.33337V4.66671H13.3333"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleFiledateIcon = convertIcon(Icon, "style-filedate");
export default StyleFiledateIcon;
