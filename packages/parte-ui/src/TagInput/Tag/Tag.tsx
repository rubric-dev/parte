import * as Styled from "./Tag.styled";
import { TagProps } from "./Tag.types";
import { ActionSmallCrossIcon } from "../../../../parte-icons/src";
import { Paragraph } from "../../@foundations/Typography";

export function Tag({ tag, onRemove }: TagProps) {
  return (
    <Styled.Container
      status={tag.status}
      tabIndex={0}
      gap={2}
      paddingRight={4}
      paddingLeft={4}
      display="flex"
      alignItems="center"
    >
      <Paragraph size={100}>{tag.label}</Paragraph>
      <ActionSmallCrossIcon
        color="R400"
        size={12}
        onClick={(e) => {
          e.stopPropagation();
          onRemove(tag.value);
        }}
      />
    </Styled.Container>
  );
}
