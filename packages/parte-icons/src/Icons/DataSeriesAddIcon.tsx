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
        d="M10.68 7.9C11.12 8.44 11.75 8.82 12.47 8.95L9.71 11.71C9.53 11.89 9.28 12 9 12C8.72 12 8.47 11.89 8.29 11.7L5 8.41L2 11.41V13H15C15.55 13 16 13.45 16 14C16 14.55 15.55 15 15 15H1C0.45 15 0 14.55 0 14V4C0 3.45 0.45 3 1 3C1.55 3 2 3.45 2 4V8.59L4.29 6.29C4.47 6.11 4.72 6 5 6C5.28 6 5.53 6.11 5.71 6.29L9 9.59L10.68 7.9ZM15 3C15.55 3 16 3.45 16 4C16 4.55 15.55 5 15 5H14V6C14 6.55 13.55 7 13 7C12.45 7 12 6.55 12 6V5H11C10.45 5 10 4.55 10 4C10 3.45 10.45 3 11 3H12V2C12 1.45 12.45 1 13 1C13.55 1 14 1.45 14 2V3H15Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataSeriesAddIcon = convertIcon(Icon, "data-series-add");
export default DataSeriesAddIcon;
