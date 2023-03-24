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
        d="M14 2H13V1C13 0.45 12.55 0 12 0C11.45 0 11 0.45 11 1V2H10C9.45 2 9 2.45 9 3C9 3.55 9.45 4 10 4H11V5C11 5.55 11.45 6 12 6C12.55 6 13 5.55 13 5V4H14C14.55 4 15 3.55 15 3C15 2.45 14.55 2 14 2ZM10.82 6.8C10.51 7.51 9.82 8 9 8H7C6.27 8 5.59 8.2 5 8.55V5.82C6.16 5.4 7 4.3 7 3C7 1.34 5.66 0 4 0C2.34 0 1 1.34 1 3C1 4.3 1.84 5.4 3 5.82V10.19C1.84 10.59 1 11.7 1 13C1 14.66 2.34 16 4 16C5.66 16 7 14.66 7 13C7 11.96 6.47 11.05 5.68 10.51C6.03 10.2 6.49 10 7 10H9C10.9 10 12.49 8.67 12.89 6.89C12.6 6.96 12.31 7 12 7C11.59 7 11.2 6.92 10.82 6.8ZM4 2C4.55 2 5 2.45 5 3C5 3.55 4.55 4 4 4C3.45 4 3 3.55 3 3C3 2.45 3.45 2 4 2ZM4 14C3.45 14 3 13.55 3 13C3 12.45 3.45 12 4 12C4.55 12 5 12.45 5 13C5 13.55 4.55 14 4 14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitNewBranchIcon = convertIcon(Icon, "action-git-new-branch");
export default ActionGitNewBranchIcon;
