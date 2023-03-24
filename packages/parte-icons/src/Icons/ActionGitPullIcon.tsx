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
        d="M3 1C1.34 1 0 2.34 0 4C0 5.3 0.84 6.4 2 6.82V10.19C0.84 10.6 0 11.7 0 13C0 14.66 1.34 16 3 16C4.66 16 6 14.66 6 13C6 11.7 5.16 10.6 4 10.18V6.82C5.16 6.4 6 5.3 6 4C6 2.34 4.66 1 3 1ZM3 14C2.45 14 2 13.55 2 13C2 12.45 2.45 12 3 12C3.55 12 4 12.45 4 13C4 13.55 3.55 14 3 14ZM3 5C2.45 5 2 4.55 2 4C2 3.45 2.45 3 3 3C3.55 3 4 3.45 4 4C4 4.55 3.55 5 3 5ZM14 10.18V6C14 4.34 12.66 3 11 3H9.41L10.7 1.71C10.89 1.53 11 1.28 11 1C11 0.45 10.55 0 10 0C9.72 0 9.47 0.11 9.29 0.29L6.29 3.29C6.11 3.47 6 3.72 6 4C6 4.28 6.11 4.53 6.29 4.71L9.29 7.71C9.47 7.89 9.72 8 10 8C10.55 8 11 7.55 11 7C11 6.72 10.89 6.47 10.71 6.29L9.41 5H11C11.55 5 12 5.45 12 6V10.18C10.84 10.59 10 11.69 10 13C10 14.66 11.34 16 13 16C14.66 16 16 14.66 16 13C16 11.7 15.16 10.6 14 10.18ZM13 14C12.45 14 12 13.55 12 13C12 12.45 12.45 12 13 12C13.55 12 14 12.45 14 13C14 13.55 13.55 14 13 14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitPullIcon = convertIcon(Icon, "action-git-pull");
export default ActionGitPullIcon;
