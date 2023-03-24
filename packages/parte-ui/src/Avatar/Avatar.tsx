import { useCallback, useState } from "react";
import { getInitial } from "../utils/badge.utils";
import * as Styled from "./Avatar.styled";
import { AvatarProps } from "./Avatar.types";

export const Avatar = ({
  avatarColor = "AUTO",
  size = 32,
  shape = "CIRCLE",
  name,
  showInitial,
  src,
}: AvatarProps) => {
  const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false);
  const onError = useCallback(() => setImageHasFailedLoading(true), []);
  const imageUnavailable = !src || imageHasFailedLoading;

  return (
    <Styled.Avatar avatarColor={avatarColor} size={size} shape={shape}>
      {imageUnavailable || showInitial ? (
        <Styled.Text size={size}>{getInitial(name ?? "")}</Styled.Text>
      ) : (
        <Styled.Image src={src} onError={onError} />
      )}
    </Styled.Avatar>
  );
};
