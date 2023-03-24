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
        fill="currentcolor"
        fillRule="evenodd"
        d="M10.568.421c-.01.04-.018.08-.026.121a2.51 2.51 0 0 0-1.85 1.497 6 6 0 1 0 5.27 5.273 2.51 2.51 0 0 0 1.496-1.854c.04-.008.081-.016.121-.026A8 8 0 1 1 10.568.421ZM9 12H7v-2h2v2Zm0-3H7V4h2v5Zm1-6c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1.005c0 .55-.45 1-1 1s-1-.45-1-1V4h-1c-.55 0-1-.45-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceIssueNewIcon = convertIcon(Icon, "interface-issue-new");
export default InterfaceIssueNewIcon;
