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
        d="M0 10h5V7H0v3Zm1-2h3v1H1V8Zm14-5h-4v3h5V4c0-.55-.45-1-1-1Zm0 2h-3V4h3v1ZM0 4v2h5V3H1c-.55 0-1 .45-1 1Zm0 9c0 .55.45 1 1 1h4v-3H0v2Zm6-7h4V3H6v3Zm0 8h4v-3H6v3Zm1-2h2v1H7v-1Zm4 2h4c.55 0 1-.45 1-1v-2h-5v3Zm0-4h5V7h-5v3Zm-5 0h4V7H6v3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const DataHeatGridIcon = convertIcon(Icon, "data-heart-grid");

export default DataHeatGridIcon;
