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
        d="M15 3H14V2C14 1.45 13.55 1 13 1C12.45 1 12 1.45 12 2V3H11C10.45 3 10 3.45 10 4C10 4.55 10.45 5 11 5H12V6C12 6.55 12.45 7 13 7C13.55 7 14 6.55 14 6V5H15C15.55 5 16 4.55 16 4C16 3.45 15.55 3 15 3ZM11.5 9C10.29 9 9.28 9.86 9.05 11H4.95C4.72 9.86 3.71 9 2.5 9C1.12 9 0 10.12 0 11.5C0 12.88 1.12 14 2.5 14C3.71 14 4.72 13.14 4.95 12H9.05C9.28 13.14 10.29 14 11.5 14C12.88 14 14 12.88 14 11.5C14 10.12 12.88 9 11.5 9Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionNewLinkIcon = convertIcon(Icon, "action-new-link");
export default ActionNewLinkIcon;
