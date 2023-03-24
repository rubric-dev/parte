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
        d="M16 0.57C16 0.26 15.79 0 15.48 0H8.57C8.26 0 8 0.26 8 0.57C8 0.73 8.06 0.87 8.17 0.98L11 3.71V7.45C11 7.76 11.26 8.02 11.57 8.02C11.73 8.02 11.88 7.95 11.98 7.85L12.8 6.75C12.91 6.64 12.97 6.5 12.97 6.34V3.71L15.83 0.98C15.94 0.87 16 0.73 16 0.57ZM13 10H10H7V8H9V7H7V5H9V4.3L5.33333 1H1C0.4 1 0 1.5 0 2V14C0 14.6 0.4 15 1 15H15C15.6 15 16 14.6 16 14V3.4L15 4.29999L15 7.14922C15 7.37629 14.9227 7.5966 14.7809 7.77391L13 10ZM6 11V13H2V11H6ZM6 10V8H2V10H6ZM6 5V7H2V5H6ZM14 13V11H7V13H14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableThFilteredIcon = convertIcon(Icon, "table-th-filtered");
export default TableThFilteredIcon;
