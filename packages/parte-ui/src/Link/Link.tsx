import { forwardRef } from "react";
import * as Styled from "./Link.styled";
import { LinkProps } from "./Link.types";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ disabled, size, children, ...props }, ref) => {
    return (
      <Styled.Link ref={ref} $size={size} {...props} data-disabled={disabled}>
        {children}
      </Styled.Link>
    );
  }
);

Link.displayName = "Link";
