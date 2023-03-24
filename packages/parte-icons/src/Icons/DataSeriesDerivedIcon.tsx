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
        d="M10.66 7.92C11.1 8.46 11.73 8.83 12.46 8.95L9.71 11.7C9.53 11.89 9.28 12 9 12C8.72 12 8.47 11.89 8.29 11.7L5 8.41L2 11.41V13H15C15.55 13 16 13.45 16 14C16 14.55 15.55 15 15 15H1C0.45 15 0 14.55 0 14V4C0 3.45 0.45 3 1 3C1.55 3 2 3.45 2 4V8.59L4.29 6.29C4.47 6.11 4.72 6 5 6C5.28 6 5.53 6.11 5.71 6.29L9 9.59L10.66 7.92ZM12.3 5.3L12.6 5H8C7.4 5 7 4.6 7 4C7 3.4 7.4 3 8 3H12.6L12.3 2.7C12.1 2.5 12 2.3 12 2C12 1.4 12.5 1 13 1C13.3 1 13.5 1.1 13.7 1.3L15.7 3.3C15.9 3.5 16 3.7 16 4C16 4.3 15.9 4.5 15.7 4.7L13.7 6.7C13.5 6.9 13.3 7 13 7C12.4 7 12 6.6 12 6C12 5.7 12.1 5.5 12.3 5.3Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataSeriesDerivedIcon = convertIcon(Icon, "data-series-derived");
export default DataSeriesDerivedIcon;
