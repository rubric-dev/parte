import { memo } from "react";
import { css } from "styled-components";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { ActionCrossIcon } from "../../../parte-icons/src";
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
    hasConfirm = true,
    hasCancel = true,
    hasClose = true,
    hasFooter = true,
    hasHeader = true,
    cancelLabel = "취소",
    confirmLabel = "확인",
    confirmVariant = "fill-primary",
    isConfirmDisabled = false,
    isConfirmLoading = false,
    minHeightContent = 80,
    width = 600,
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
                  size={24}
                  Icon={<ActionCrossIcon size={12} />}
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
                  variant="outline-secondary"
                  tabIndex={0}
                  onClick={handleCancel}
                >
                  {cancelLabel}
                </Button>
              )}
              {hasConfirm && (
                <Button
                  tabIndex={0}
                  variant={confirmVariant}
                  isLoading={isConfirmLoading}
                  disabled={isConfirmDisabled}
                  onClick={handleConfirm}
                >
                  {confirmLabel}
                </Button>
              )}
            </>
          )}
        </Styled.Footer>
      );
    };
    return (
      <Styled.DialogContainer
        role="dialog"
        display="flex"
        flexDirection="column"
        elevation={elevation}
        data-state={state}
        overrideStyles={css`
          width: ${width}px;
          ${overrideStyles}
        `}
      >
        {renderHeader()}

        <Styled.Content
          overrideStyles={css`
            min-height: ${minHeightContent}px;
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
