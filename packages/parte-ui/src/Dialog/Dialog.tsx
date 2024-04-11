import { memo } from "react";
import { css } from "styled-components";
import { CloseIcon } from "../../../parte-icons/src";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import * as Styled from "./Dialog.styled";
import { DialogProps, DialogSubComponent } from "./Dialog.types";

export const Dialog = memo(
  ({
    close,
    onCancel,
    onConfirm,
    children,
    header,
    title,
    footer,
    hasCancel = true,
    hasClose = true,
    hasFooter = true,
    hasHeader = true,
    cancelLabel = "취소",
    confirmLabel = "확인",
    confirmVariant = "fill-primary",
    isConfirmDisabled = false,
    isConfirmLoading = false,
    minHeightContent,
    width,
    elevation = 2,
    state,
    overrideStyles,
  }: DialogProps) => {
    const handleCancel = () => (onCancel ? onCancel(close) : close());
    const handleConfirm = () => (onConfirm ? onConfirm(close) : close());

    const renderChildren = () => {
      if (typeof children === "function") {
        return children({ close });
      }

      if (typeof children === "string") {
        return <span>{children}</span>;
      }

      return children;
    };

    const renderNode = (node: DialogSubComponent) => {
      if (typeof node === "function") {
        return node({ close });
      }

      return node;
    };

    const renderHeader = () => {
      if (!header && !hasHeader) {
        return undefined;
      }

      return (
        <Styled.Header
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={32}
          paddingBottom={24}
        >
          {header ? (
            renderNode(header)
          ) : (
            <>
              <Styled.Title>{title}</Styled.Title>
              {hasClose && (
                <IconButton
                  variant="ghost-secondary"
                  size={32}
                  Icon={<CloseIcon size={16} color="N600" />}
                  onClick={handleCancel}
                />
              )}
            </>
          )}
        </Styled.Header>
      );
    };

    const renderFooter = () => {
      if (!footer && !hasFooter) {
        return undefined;
      }

      return (
        <Styled.Footer>
          {footer ? (
            renderNode(footer)
          ) : (
            <>
              {/* Cancel should be first to make sure focus gets on it first. */}
              {hasCancel && (
                <Button
                  variant="fill-secondary"
                  tabIndex={0}
                  onClick={handleCancel}
                  size="large"
                >
                  {cancelLabel}
                </Button>
              )}

              <Button
                tabIndex={0}
                variant={confirmVariant}
                isLoading={isConfirmLoading}
                disabled={isConfirmDisabled}
                onClick={handleConfirm}
                size="large"
              >
                {confirmLabel}
              </Button>
            </>
          )}
        </Styled.Footer>
      );
    };

    const minHeightUnit = Number.isInteger(minHeightContent)
      ? `${minHeightContent}px`
      : minHeightContent;
    return (
      <Styled.DialogContainer
        role="dialog"
        display="flex"
        flexDirection="column"
        elevation={elevation}
        data-state={state}
        overrideStyles={css`
          width: ${width}px;
          height: ${minHeightUnit ?? "fit-content"};
          ${overrideStyles}
        `}
      >
        {renderHeader()}
        <Styled.Content
          overrideStyles={css`
            height: 100%;
          `}
        >
          {renderChildren()}
        </Styled.Content>

        {renderFooter()}
      </Styled.DialogContainer>
    );
  }
);

Dialog.displayName = "Dialog";
