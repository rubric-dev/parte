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
        d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.0771 15.3371 11 14.8909 11 14V8C11 7.1091 12.0771 6.66293 12.7071 7.29289L15.7071 10.2929ZM12 2C12 2.28 11.89 2.53 11.71 2.7L8 6.41V10C8 10.28 7.89 10.53 7.71 10.71L5.71 12.71C5.53 12.89 5.28 13 5 13C4.45 13 4 12.55 4 12V6.41L0.29 2.71C0.11 2.53 0 2.28 0 2C0 1.45 0.45 1 1 1H11C11.55 1 12 1.45 12 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionFilterOpenIcon = convertIcon(Icon, "action-filter-open");
export default ActionFilterOpenIcon;
