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
        d="M8 4C8 4.6 8.4 5 9 5H11V7C11 7.6 11.4 8 12 8C12.6 8 13 7.6 13 7V5H15C15.6 5 16 4.6 16 4C16 3.4 15.6 3 15 3H13V1C13 0.4 12.6 0 12 0C11.4 0 11 0.4 11 1V3H9C8.4 3 8 3.5 8 4V4ZM14.5 6.5V7C14.5 8.4 13.4 9.5 12 9.5C10.6 9.5 9.5 8.4 9.5 7V6.5H9C7.6 6.5 6.5 5.4 6.5 4C6.5 2.6 7.6 1.5 9 1.5H9.5V1C9.5 0.7 9.6 0.4 9.6 0.2C9.1 0.1 8.6 0 8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 7.4 15.9 6.7 15.8 6.1C15.4 6.4 15 6.5 14.5 6.5V6.5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionNewObjectIcon = convertIcon(Icon, "action-new-object");
export default ActionNewObjectIcon;
