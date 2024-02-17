import { forwardRef, useCallback, useState } from "react";
import { getInitial } from "../utils/badge.utils";
import * as Styled from "./Avatar.styled";
import { AvatarProps } from "./Avatar.types";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      avatarColor = "AUTO",
      size = "small",
      shape = "CIRCLE",
      name,
      showInitial,
      src,
    },
    ref
  ) => {
    const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false);
    const onError = useCallback(() => setImageHasFailedLoading(true), []);
    const imageUnavailable = !src || imageHasFailedLoading;

    return (
      <Styled.Avatar
        ref={ref}
        $avatarColor={avatarColor}
        $size={size}
        $shape={shape}
      >
        {imageUnavailable || showInitial ? (
          <Styled.Text $size={size}>{getInitial(name ?? "")}</Styled.Text>
        ) : (
          <Styled.Image src={src} onError={onError} />
        )}
      </Styled.Avatar>
    );
  }
);

Avatar.displayName = "Avatar";
