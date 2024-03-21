import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M11.87 9.17s.01 0 0 0l-3.5-4A.498.498 0 0 0 8 5c-.15 0-.28.07-.37.17l-3.5 4a.495.495 0 0 0 .37.83h7a.495.495 0 0 0 .37-.83Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const CaretUpIcon = convertIcon(Icon, "caret-up");
export default CaretUpIcon;
