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
        d="M15 7H11.86C11.41 5.28 9.86 4 8 4C6.14 4 4.59 5.28 4.14 7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9H4.14C4.59 10.72 6.14 12 8 12C9.86 12 11.41 10.72 11.86 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7ZM8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitCommitIcon = convertIcon(Icon, "action-git-commit");
export default ActionGitCommitIcon;
