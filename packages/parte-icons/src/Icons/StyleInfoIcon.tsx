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
      <g clip-path="url(#clip0_515_6341)">
        <path
          d="M8.00004 14.6667C9.84097 14.6667 11.5076 13.9205 12.7141 12.7141C13.9205 11.5076 14.6667 9.84097 14.6667 8.00004C14.6667 6.15911 13.9205 4.49244 12.7141 3.28599C11.5076 2.07957 9.84097 1.33337 8.00004 1.33337C6.15911 1.33337 4.49244 2.07957 3.28599 3.28599C2.07957 4.49244 1.33337 6.15911 1.33337 8.00004C1.33337 9.84097 2.07957 11.5076 3.28599 12.7141C4.49244 13.9205 6.15911 14.6667 8.00004 14.6667Z"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.99996 3.66663C8.46019 3.66663 8.83329 4.03973 8.83329 4.49996C8.83329 4.96019 8.46019 5.33329 7.99996 5.33329C7.53973 5.33329 7.16663 4.96019 7.16663 4.49996C7.16663 4.03973 7.53973 3.66663 7.99996 3.66663Z"
          fill="#8F95B2"
        />
        <path
          d="M8.16667 11.3333V6.66663H7.83333H7.5"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 11.3334H9.33333"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_515_6341">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const StyleInfoIcon = convertIcon(Icon, "style-info");
export default StyleInfoIcon;
