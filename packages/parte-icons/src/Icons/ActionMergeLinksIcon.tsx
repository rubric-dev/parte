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
        d="M8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7ZM8 11C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13C8.55 13 9 12.55 9 12C9 11.45 8.55 11 8 11ZM8 3C7.45 3 7 3.45 7 4C7 4.55 7.45 5 8 5C8.55 5 9 4.55 9 4C9 3.45 8.55 3 8 3ZM14 6C13.07 6 12.29 6.64 12.07 7.5H11V3C11 1.34 9.66 0 8 0C6.34 0 5 1.34 5 3V7.5H3.93C3.71 6.64 2.93 6 2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C2.93 10 3.71 9.36 3.93 8.5H5V13C5 14.66 6.34 16 8 16C9.66 16 11 14.66 11 13V8.5H12.07C12.29 9.36 13.07 10 14 10C15.1 10 16 9.1 16 8C16 6.9 15.1 6 14 6ZM10 13C10 14.1 9.1 15 8 15C6.9 15 6 14.1 6 13V3C6 1.9 6.9 1 8 1C9.1 1 10 1.9 10 3V13Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionMergeLinksIcon = convertIcon(Icon, "action-merge-links");
export default ActionMergeLinksIcon;
