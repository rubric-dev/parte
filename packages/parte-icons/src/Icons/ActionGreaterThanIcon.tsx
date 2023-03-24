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
        d="M2.71267 5.95783C2.18368 5.79913 1.8835 5.24165 2.04219 4.71266C2.20089 4.18366 2.75837 3.88348 3.28737 4.04218L13.2874 7.04218C14.2376 7.32724 14.2376 8.67277 13.2874 8.95783L3.28737 11.9578C2.75837 12.1165 2.20089 11.8163 2.04219 11.2874C1.8835 10.7584 2.18368 10.2009 2.71267 10.0422L9.51992 8L2.71267 5.95783Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGreaterThanIcon = convertIcon(Icon, "action-greater-than");
export default ActionGreaterThanIcon;
