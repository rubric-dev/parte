import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M1.5 8.00005L7.46933 2.03005C7.76267 1.73738 8.23733 1.73738 8.53 2.03005L14.5 8.00005M3 6.50005V13.25C3 13.664 3.336 14 3.75 14H6.5V10.75C6.5 10.336 6.836 10 7.25 10H8.75C9.164 10 9.5 10.336 9.5 10.75V14H12.25C12.664 14 13 13.664 13 13.25V6.50005M5.5 14H11"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
const HomeIcon = convertIcon(Icon, "home");
export default HomeIcon;
