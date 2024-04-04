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
        d="M5.66494 2.56195C5.90714 2.56195 6.13027 2.69329 6.24784 2.90504L7.0633 4.37397C7.17007 4.56631 7.1751 4.79894 7.0767 4.99571L6.2911 6.56694C6.2911 6.56694 6.51877 7.73741 7.47157 8.69021C8.42437 9.64301 9.59094 9.86674 9.59094 9.86674L11.1619 9.08127C11.3588 8.98281 11.5916 8.98791 11.784 9.09487L13.2571 9.91387C13.4686 10.0315 13.5998 10.2545 13.5998 10.4965V12.1877C13.5998 13.0489 12.7999 13.671 11.9838 13.3956C10.3079 12.8301 7.7063 11.7534 6.05737 10.1044C4.4084 8.45547 3.33167 5.85391 2.76616 4.17794C2.49082 3.36191 3.11285 2.56195 3.97407 2.56195H5.66494Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const PhoneTelephoneIcon = convertIcon(Icon, "phone-telephone");
export default PhoneTelephoneIcon;
