import { useId } from "react";
import { Caption } from "../@foundations";
import { Box } from "../Layout";
import * as Styled from "./InputWrapper.styled";
import { InputWrapperProps } from "./InputWrapper.types";

export const InputWrapper = ({
  direction = "vertical",
  ...rest
}: InputWrapperProps) => {
  if (direction === "vertical") {
    return <VerticalLayout {...rest} />;
  }

  return <HorizontalLayout {...rest} />;
};

const VerticalLayout = ({
  children,
  label,
  description,
  required = false,
  errorText,
  fullWidth = false,
}: Omit<InputWrapperProps, "direction">) => {
  const id = useId();

  return (
    <Styled.Container fullWidth={fullWidth} flexDirection="column">
      {label && (
        <Box
          display="flex"
          alignItems="flex-start"
          columnGap={2}
          marginBottom={2}
        >
          {required && (
            <Caption size={200} color="R400">
              *
            </Caption>
          )}
          <Styled.Label
            htmlFor={id}
            title={required ? "This field is required" : ""}
          >
            {label}
          </Styled.Label>
        </Box>
      )}
      {description && <Styled.Description>{description}</Styled.Description>}
      {children}
      {errorText && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
    </Styled.Container>
  );
};

const HorizontalLayout = ({
  children,
  label,
  description,
  required = false,
  errorText,
  fullWidth = false,
}: Omit<InputWrapperProps, "direction">) => {
  const id = useId();

  return (
    <Styled.Container
      fullWidth={fullWidth}
      flexDirection="row"
      gap={8}
      alignItems="flex-start"
    >
      {label && (
        <Box
          display="flex"
          alignItems="flex-start"
          columnGap={2}
          paddingTop={8}
          paddingBottom={8}
        >
          {required && (
            <Caption size={200} color="R400">
              *
            </Caption>
          )}
          <Styled.Label
            htmlFor={id}
            title={required ? "This field is required" : ""}
          >
            {label}
          </Styled.Label>
        </Box>
      )}
      <Box display="flex" flexDirection="column" gap={2}>
        {children}
        {errorText ? (
          <Styled.ErrorText>{errorText}</Styled.ErrorText>
        ) : (
          description && <Styled.Description>{description}</Styled.Description>
        )}
      </Box>
    </Styled.Container>
  );
};
