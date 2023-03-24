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
        d="M12 6C10.7 6 9.6 6.84 9.18 8H9C7.38 8 6 7.04 5.37 5.66C6.33 5.16 7 4.16 7 3C7 1.34 5.66 0 4 0C2.34 0 1 1.34 1 3C1 4.3 1.84 5.4 3 5.81V10.18C1.84 10.6 1 11.7 1 13C1 14.66 2.34 16 4 16C5.66 16 7 14.66 7 13C7 11.7 6.16 10.6 5 10.18V8.43C6.06 9.4 7.45 10 9 10H9.18C9.59 11.16 10.69 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6ZM4 14C3.45 14 3 13.55 3 13C3 12.45 3.45 12 4 12C4.55 12 5 12.45 5 13C5 13.55 4.55 14 4 14ZM4 4C3.45 4 3 3.55 3 3C3 2.45 3.45 2 4 2C4.55 2 5 2.45 5 3C5 3.55 4.55 4 4 4ZM12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitMergeIcon = convertIcon(Icon, "action-git-merge");
export default ActionGitMergeIcon;
