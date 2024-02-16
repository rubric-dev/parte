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
        d="M6.99967 12.6667C10.1293 12.6667 12.6663 10.1296 12.6663 7.00004C12.6663 3.87044 10.1293 1.33337 6.99967 1.33337C3.87007 1.33337 1.33301 3.87044 1.33301 7.00004C1.33301 10.1296 3.87007 12.6667 6.99967 12.6667Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M8.88549 4.78103C8.40292 4.29847 7.73626 4 6.99986 4C6.26349 4 5.59682 4.29847 5.11426 4.78103"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M11.0742 11.0739L13.9027 13.9023"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
const SearchIcon = convertIcon(Icon, "search");
export default SearchIcon;
