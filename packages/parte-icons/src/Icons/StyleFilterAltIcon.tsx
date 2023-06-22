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
        d="M2.66663 4.66667C2.66663 4.29848 2.96511 4 3.33329 4H12.6666C13.0348 4 13.3333 4.29848 13.3333 4.66667C13.3333 5.03485 13.0348 5.33333 12.6666 5.33333H3.33329C2.96511 5.33333 2.66663 5.03485 2.66663 4.66667ZM3.99996 8C3.99996 7.6318 4.29844 7.33333 4.66663 7.33333H11.3333C11.7015 7.33333 12 7.6318 12 8C12 8.3682 11.7015 8.66667 11.3333 8.66667H4.66663C4.29844 8.66667 3.99996 8.3682 3.99996 8ZM5.33329 11.3333C5.33329 10.9651 5.63177 10.6667 5.99996 10.6667H9.99996C10.3682 10.6667 10.6666 10.9651 10.6666 11.3333C10.6666 11.7015 10.3682 12 9.99996 12H5.99996C5.63177 12 5.33329 11.7015 5.33329 11.3333Z"
        fill="currentcolor"
      />
    </svg>
  );
}

const StyleFilterAltIcon = convertIcon(Icon, "style-filteralt");
export default StyleFilterAltIcon;
