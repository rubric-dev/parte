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
        d="M5 9H4V10H5V9ZM15 0H1C0.45 0 0 0.45 0 1V14C0 14.55 0.45 15 1 15H4V16L6 15L8 16V15H15C15.55 15 16 14.55 16 14V1C16 0.45 15.55 0 15 0ZM4 13H2V12H4V13ZM14 13H8V12H14V13ZM14 11H3V2H14V11ZM5 3H4V4H5V3ZM5 7H4V8H5V7ZM5 5H4V6H5V5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitRepoIcon = convertIcon(Icon, "action-git-repo");
export default ActionGitRepoIcon;
