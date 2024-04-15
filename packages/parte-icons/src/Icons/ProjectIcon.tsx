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
        d="M1.66699 2.66667C1.66699 2.29848 1.96547 2 2.33366 2H6.33366L8.00033 4H13.667C14.0352 4 14.3337 4.29847 14.3337 4.66667V13.3333C14.3337 13.7015 14.0352 14 13.667 14H2.33366C1.96547 14 1.66699 13.7015 1.66699 13.3333V2.66667Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ProjectIcon = convertIcon(Icon, "project");
export default ProjectIcon;
