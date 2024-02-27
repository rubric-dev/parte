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
        d="M2.66699 4.66667C2.66699 4.29848 2.96547 4 3.33366 4H12.667C13.0352 4 13.3337 4.29848 13.3337 4.66667C13.3337 5.03485 13.0352 5.33333 12.667 5.33333H3.33366C2.96547 5.33333 2.66699 5.03485 2.66699 4.66667ZM4.00033 8C4.00033 7.6318 4.29881 7.33333 4.66699 7.33333H11.3337C11.7019 7.33333 12.0003 7.6318 12.0003 8C12.0003 8.3682 11.7019 8.66667 11.3337 8.66667H4.66699C4.29881 8.66667 4.00033 8.3682 4.00033 8ZM5.33366 11.3333C5.33366 10.9651 5.63214 10.6667 6.00033 10.6667H10.0003C10.3685 10.6667 10.667 10.9651 10.667 11.3333C10.667 11.7015 10.3685 12 10.0003 12H6.00033C5.63214 12 5.33366 11.7015 5.33366 11.3333Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const FilterThreeIcon = convertIcon(Icon, "filter-three");
export default FilterThreeIcon;
