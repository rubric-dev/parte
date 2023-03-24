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
        d="M14.9 11C14.6 11 14.4 11.1 14.2 11.3L11.2 14.3C11 14.5 10.9 14.7 10.9 15C10.9 15.6 11.4 16 11.9 16C12.2 16 12.4 15.9 12.6 15.7L15.6 12.7C15.8 12.5 15.9 12.3 15.9 12C15.9 11.5 15.5 11 14.9 11V11ZM13.9 10C13.9 9.90001 13.9 9.90001 13.9 9.80001V9.80001L12.9 4.80001V4.80001C12.8 4.50001 12.6 4.20001 12.3 4.10001V4.10001L1.3 0.100006L1 0.400006L6.8 6.20001C7 6.10001 7.2 6.00001 7.4 6.00001C8.2 6.00001 8.9 6.70001 8.9 7.50001C8.9 8.30001 8.3 9.00001 7.4 9.00001C6.5 9.00001 5.9 8.30001 5.9 7.50001C5.9 7.30001 6 7.10001 6.1 6.90001L0.3 1.10001L0 1.40001L4 12.4V12.4C4.1 12.7 4.4 13 4.7 13V13L9.7 14V14C9.8 14 9.8 14 9.9 14C10.2 14 10.4 13.9 10.6 13.7L13.6 10.7C13.8 10.5 13.9 10.3 13.9 10V10Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionDrawIcon = convertIcon(Icon, "action-draw");
export default ActionDrawIcon;
