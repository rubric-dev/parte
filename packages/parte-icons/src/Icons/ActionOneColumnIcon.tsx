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
        d="M11.7553 0.931763H8.93179C8.41414 0.931763 7.99061 1.35529 7.99061 1.87294V15.0494C7.99061 15.5671 8.41414 15.9906 8.93179 15.9906H11.7553C12.273 15.9906 12.6965 15.5671 12.6965 15.0494V1.87294C12.6965 1.35529 12.273 0.931763 11.7553 0.931763ZM6.10826 5.63765C5.84473 5.63765 5.60943 5.74117 5.44002 5.91059L3.55767 7.79294C3.38826 7.97176 3.28473 8.20706 3.28473 8.46117C3.28473 8.71529 3.38826 8.96 3.55767 9.12941L5.44002 11.0118C5.60943 11.1812 5.84473 11.2847 6.10826 11.2847C6.62591 11.2847 7.04943 10.8612 7.04943 10.3435V6.57882C7.04943 6.06117 6.62591 5.63765 6.10826 5.63765Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionOneColumnIcon = convertIcon(Icon, "action-one-column");
export default ActionOneColumnIcon;
