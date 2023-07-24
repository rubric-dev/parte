import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  forwardRef,
  useState,
} from "react";
import { useTheme } from "styled-components";
import { Box } from "../Layout";
import { Tag } from "./Tag";
import * as Styled from "./TagInput.styled";
import { TagInputProps } from "./TagInput.types";

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      addOnBlur,
      onAdd,
      onBlur: customOnblur,
      onInputChange,
      onRemove,
      values,
      ...props
    },
    ref
  ) => {
    const { spacing } = useTheme();
    const { trailingIcon, isError, disabled, onFocus, width } = props;

    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);

    const [inputValue, setInputValue] = useState<string>("");

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!inputValue && e.key === "Backspace") {
        const temp = values.filter((tag) => tag.status !== "disabled");
        if (temp.length) {
          onRemove(temp[temp.length - 1].value);
        }
      }

      if (e.key !== "Enter") {
        return;
      }

      if (!inputValue) {
        return;
      }

      if (e.nativeEvent.isComposing) {
        return;
      }

      onAdd(inputValue);
      setInputValue("");
    };

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (addOnBlur && inputValue) {
        onAdd(inputValue);
        setInputValue("");
      }
      setFocused(false);
      customOnblur?.(e);
    };

    return (
      <Styled.InputWrapper
        hover={hover}
        focused={focused}
        disabled={disabled}
        data-error={isError}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        $width={width}
      >
        <Box
          paddingTop={spacing.spacing8 - 1}
          paddingBottom={spacing.spacing8 - 1}
          paddingLeft={12}
          paddingRight={12}
          gap={8}
          display="flex"
          flex="1"
          flexWrap="wrap"
        >
          {!!values.length && (
            <>
              {values.map((tag) => (
                <Tag
                  key={tag.value.toString()}
                  tag={disabled ? { ...tag, status: "disabled" } : tag}
                  onRemove={() => {
                    if (tag.status === "disabled") {
                      return;
                    }
                    onRemove(tag.value);
                  }}
                />
              ))}
            </>
          )}
          <Styled.Input
            ref={ref}
            {...props}
            onFocus={(e: FocusEvent<HTMLInputElement>) => {
              onFocus?.(e);
              setFocused(true);
            }}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
              onInputChange?.();
            }}
          />
        </Box>
        {trailingIcon && (
          <Styled.RightIconContainer disabled={!!props.disabled}>
            {trailingIcon}
          </Styled.RightIconContainer>
        )}
      </Styled.InputWrapper>
    );
  }
);

TagInput.displayName = "TagInput";
