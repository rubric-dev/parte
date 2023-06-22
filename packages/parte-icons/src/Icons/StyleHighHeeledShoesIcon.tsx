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
        d="M9.72767 6.66663C10.4214 5.01783 12.1169 3.55553 13 2.66663C13.368 2.88885 14.6667 3.53453 14.6667 4.99996C14.6667 6.33329 14.1819 7.37033 13.6667 7.66663L11.6709 9.06366C10.7891 9.68093 10.0472 10.477 9.49337 11.4L8.33337 13.3333H1.33337V12C2.14294 11.5555 4.60691 10.0444 5.66671 9.33329C8.00004 10.6666 9.16671 7.99996 9.72767 6.66663Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3334 7V13.3333"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleHighHeeledShoesIcon = convertIcon(Icon, "style-highheeledshoes");
export default StyleHighHeeledShoesIcon;
