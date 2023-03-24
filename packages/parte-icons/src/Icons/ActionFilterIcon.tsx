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
        d="M13.99 0.990005H1.98999C1.43999 0.990005 0.98999 1.44001 0.98999 1.99001C0.98999 2.27001 1.09999 2.52001 1.27999 2.70001L5.98999 7.41001V14C5.98999 14.55 6.43999 15 6.98999 15C7.26999 15 7.51999 14.89 7.69999 14.71L9.69999 12.71C9.87999 12.53 9.98999 12.28 9.98999 12V7.41001L14.7 2.70001C14.88 2.52001 14.99 2.27001 14.99 1.99001C14.99 1.44001 14.54 0.990005 13.99 0.990005Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionFilterIcon = convertIcon(Icon, "action-filter");
export default ActionFilterIcon;
