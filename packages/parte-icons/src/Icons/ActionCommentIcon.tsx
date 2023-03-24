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
        d="M14 1H1C0.45 1 0 1.45 0 2V11C0 11.55 0.45 12 1 12H3V15C3 15.55 3.45 16 4 16C4.28 16 4.53 15.89 4.71 15.71L8.41 12H14C14.55 12 15 11.55 15 11V2C15 1.45 14.55 1 14 1ZM3.5 8C2.67 8 2 7.33 2 6.5C2 5.67 2.67 5 3.5 5C4.33 5 5 5.67 5 6.5C5 7.33 4.33 8 3.5 8ZM7.5 8C6.67 8 6 7.33 6 6.5C6 5.67 6.67 5 7.5 5C8.33 5 9 5.67 9 6.5C9 7.33 8.33 8 7.5 8ZM11.5 8C10.67 8 10 7.33 10 6.5C10 5.67 10.67 5 11.5 5C12.33 5 13 5.67 13 6.5C13 7.33 12.33 8 11.5 8Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionCommentIcon = convertIcon(Icon, "action-comment");
export default ActionCommentIcon;
