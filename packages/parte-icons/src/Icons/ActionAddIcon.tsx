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
        d="M10.993 6.996H8.995V4.997c0-.55-.45-1-1-1s-1 .45-1 1v1.999H4.998c-.55 0-1 .45-1 1 0 .549.45.999 1 .999h1.999v1.998c0 .55.45 1 1 1 .549 0 .999-.45.999-1V8.995h1.998c.55 0 1-.45 1-1s-.45-1-1-1zM7.995 0A7.993 7.993 0 000 7.995a7.993 7.993 0 007.995 7.996 7.993 7.993 0 007.996-7.996A7.993 7.993 0 007.995 0zm0 13.992A6.001 6.001 0 012 7.995 6.001 6.001 0 017.996 2a6.001 6.001 0 015.996 5.996 5.995 5.995 0 01-5.996 5.997z"
        fill="currentcolor"
      />
    </svg>
  );
}

const ActionAddIcon = convertIcon(Icon, "action-add");

export default ActionAddIcon;
