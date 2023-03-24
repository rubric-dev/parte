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
        d="M13.2871 3.95783C13.8161 3.79913 14.1163 3.24165 13.9576 2.71266C13.7989 2.18366 13.2414 1.88348 12.7124 2.04218L2.71239 5.04218C1.76219 5.32724 1.76219 6.67277 2.71239 6.95783L12.7124 9.95783C13.2414 10.1165 13.7989 9.81634 13.9576 9.28735C14.1163 8.75836 13.8161 8.20088 13.2871 8.04218L6.47984 6L13.2871 3.95783ZM12.9997 12H2.99974C2.44745 12 1.99974 12.4477 1.99974 13C1.99974 13.5523 2.44745 14 2.99974 14H12.9997C13.552 14 13.9997 13.5523 13.9997 13C13.9997 12.4477 13.552 12 12.9997 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionLessThanOrEqualToIcon = convertIcon(
  Icon,
  "action-less-than-or-equal-to"
);
export default ActionLessThanOrEqualToIcon;
