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
        d="M5 6.5C5 6.78 5.22 7 5.5 7H7V10.5C7 10.78 7.22 11 7.5 11C7.78 11 8 10.78 8 10.5V7H9.5C9.78 7 10 6.78 10 6.5C10 6.22 9.78 6 9.5 6H5.5C5.22 6 5 6.22 5 6.5ZM15 2H14V1C14 0.45 13.55 0 13 0C12.45 0 12 0.45 12 1V2H11C10.45 2 10 2.45 10 3C10 3.55 10.45 4 11 4H12V5C12 5.55 12.45 6 13 6C13.55 6 14 5.55 14 5V4H15C15.55 4 16 3.55 16 3C16 2.45 15.55 2 15 2ZM13 7C12.45 7 12 7.45 12 8V13H3V4H8C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2H2C1.45 2 1 2.45 1 3V14C1 14.55 1.45 15 2 15H13C13.55 15 14 14.55 14 14V8C14 7.45 13.55 7 13 7Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionNewTextBoxIcon = convertIcon(Icon, "action-new-text-box");
export default ActionNewTextBoxIcon;
