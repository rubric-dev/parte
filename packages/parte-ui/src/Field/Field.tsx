import { useTheme } from "styled-components";
import { Paragraph } from "../@foundations";
import { Box } from "../Layout";
import * as Styled from "./Field.styled";
import {
  FieldDescriptionProps,
  FieldErrorMessageProps,
  FieldLabelProps,
  FieldProps,
} from "./Field.types";
import { Tooltip } from "../Tooltip";
import { AlertInfoIcon } from "../../../parte-icons/src";

export const Field = ({ direction = "vertical", ...props }: FieldProps) => {
  if (direction === "vertical") {
    return <VerticalLayout {...props} />;
  }
  return <HorizontalLayout {...props} />;
};

const Label = (props: FieldLabelProps) => {
  const { required, disabled, children, tooltip, ...labelAttributes } = props;
  return (
    <Box display="flex" flexDirection="row" columnGap={4} alignItems="center">
      <Styled.Label
        aria-disabled={disabled}
        aria-required={required}
        {...labelAttributes}
      >
        {children}
      </Styled.Label>
      {tooltip && (
        <Tooltip content={tooltip} position="TOP">
          <AlertInfoIcon color="N700" />
        </Tooltip>
      )}
    </Box>
  );
};

const Description = (props: FieldDescriptionProps) => {
  return <Paragraph size={100} color="N700" {...props} />;
};
const ErrorMessage = (props: FieldErrorMessageProps) => {
  return <Paragraph size={100} color="R400" {...props} />;
};

Field.Label = Label;
Field.Description = Description;
Field.ErrorMessage = ErrorMessage;

const VerticalLayout = ({ children, ...boxProps }: FieldProps) => {
  if (!Array.isArray(children)) {
    console.warn("Field 컴포넌트가 하나의 child만 가지고 있습니다.");
  }
  return (
    <Box display="flex" flexDirection="column" gap={2} {...boxProps}>
      {children}
    </Box>
  );
};

const HorizontalLayout = ({ children, ...boxProps }: FieldProps) => {
  const { spacing } = useTheme();
  if (!Array.isArray(children)) {
    console.warn("Field 컴포넌트가 하나의 child만 가지고 있습니다. ");
  }

  let ChildrenComponent = children;
  if (Array.isArray(children)) {
    const [label, ...rest] = children;
    ChildrenComponent = (
      <>
        <Box
          display="inline-flex"
          paddingTop={spacing.spacing4}
          paddingBottom={spacing.spacing4}
        >
          {label}
        </Box>
        <Box display="flex" flexDirection="column" gap={spacing.spacing2}>
          {rest}
        </Box>
      </>
    );
  }

  return (
    <Box display="flex" gap={8} alignItems="flex-start" {...boxProps}>
      {ChildrenComponent}
    </Box>
  );
};
