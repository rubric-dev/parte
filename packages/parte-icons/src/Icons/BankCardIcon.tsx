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
        d="M1.33301 3.33332C1.33301 2.96513 1.63148 2.66666 1.99967 2.66666H13.9997C14.3679 2.66666 14.6663 2.96513 14.6663 3.33332V12.6667C14.6663 13.0349 14.3679 13.3333 13.9997 13.3333H1.99967C1.63148 13.3333 1.33301 13.0349 1.33301 12.6667V3.33332Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 5.33334H14.6663"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.6667H12"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.667 3.33334V8.66668"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 3.33334V8.66668"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BankCardIcon = convertIcon(Icon, "bank-card");
export default BankCardIcon;
