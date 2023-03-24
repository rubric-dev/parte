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
        d="M12 1C10.34 1 9 2.34 9 4C9 5.25 9.76 6.32 10.85 6.77C10.54 7.49 9.83 8 9 8H7C6.27 8 5.59 8.2 5 8.55V5.82C6.16 5.4 7 4.3 7 3C7 1.34 5.66 0 4 0C2.34 0 1 1.34 1 3C1 4.3 1.84 5.4 3 5.82V10.19C1.84 10.59 1 11.7 1 13C1 14.66 2.34 16 4 16C5.66 16 7 14.66 7 13C7 11.96 6.47 11.05 5.68 10.51C6.03 10.2 6.49 10 7 10H9C10.92 10 12.52 8.65 12.91 6.85C14.12 6.46 15 5.34 15 4C15 2.34 13.66 1 12 1ZM4 2C4.55 2 5 2.45 5 3C5 3.55 4.55 4 4 4C3.45 4 3 3.55 3 3C3 2.45 3.45 2 4 2ZM4 14C3.45 14 3 13.55 3 13C3 12.45 3.45 12 4 12C4.55 12 5 12.45 5 13C5 13.55 4.55 14 4 14ZM12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGitBranchIcon = convertIcon(Icon, "action-git-branch");
export default ActionGitBranchIcon;
