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
        d="M2 3L6.8 8.60593V12.8148L9.2 14V8.60593L14 3H2Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleFilterIcon = convertIcon(Icon, "style-filter");
export default StyleFilterIcon;
