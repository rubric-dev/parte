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
        d="M4 6H5V5H4V6ZM13 9C13 8.72 12.89 8.47 12.71 8.29L9.71 5.29C9.53 5.11 9.28 5 9 5C8.72 5 8.47 5.11 8.29 5.29L5.29 8.29C5.11 8.47 5 8.72 5 9C5 9.55 5.45 10 6 10C6.28 10 6.53 9.89 6.71 9.71L8 8.41V15C8 15.55 8.45 16 9 16C9.55 16 10 15.55 10 15V8.41L11.29 9.7C11.47 9.89 11.72 10 12 10C12.55 10 13 9.55 13 9ZM5 3H4V4H5V3ZM15 0H1C0.45 0 0 0.45 0 1V14C0 14.55 0.45 15 1 15H6V13H2V12H6V11H3V2H14V11H12V12H14V13H12V15H15C15.55 15 16 14.55 16 14V1C16 0.45 15.55 0 15 0Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitPushIcon = convertIcon(Icon, "action-git-push");
export default ActionGitPushIcon;
