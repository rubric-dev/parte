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
        d="M6.85953 2.57335L1.21286 12C1.09644 12.2016 1.03484 12.4302 1.03418 12.663C1.03353 12.8958 1.09385 13.1248 1.20914 13.327C1.32443 13.5293 1.49068 13.6978 1.69133 13.8159C1.89199 13.934 2.12006 13.9975 2.35286 14H13.6462C13.879 13.9975 14.1071 13.934 14.3077 13.8159C14.5084 13.6978 14.6746 13.5293 14.7899 13.327C14.9052 13.1248 14.9655 12.8958 14.9649 12.663C14.9642 12.4302 14.9026 12.2016 14.7862 12L9.13953 2.57335C9.02068 2.37742 8.85334 2.21543 8.65366 2.103C8.45397 1.99058 8.22868 1.93152 7.99953 1.93152C7.77037 1.93152 7.54508 1.99058 7.3454 2.103C7.14571 2.21543 6.97837 2.37742 6.85953 2.57335Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V8.66667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.3333H8.00667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const WarningIcon = convertIcon(Icon, "warning");
export default WarningIcon;
