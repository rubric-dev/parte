import { useCallback } from "react";
import * as Styled from "./Pagination.styled";
import { PaginationProps, PaginationButtonProps } from "./Pagination.types";
import {
  InterfaceChevronLeftIcon,
  InterfaceChevronRightIcon,
} from "../../../parte-icons/src";
import { Box } from "../Layout";
import { Headline } from "../@foundations";
import { IconButton } from "../IconButton";

const MAX_HANDLES_TO_SHOW = 7;
const ELLIPSIS_TEXT = "...";

const PaginationButton = ({
  isSelected,
  onPageChange,
  disabled = false,
  page,
  children,
}: PaginationButtonProps) => {
  const isEllipsis = typeof page === "string" && page === ELLIPSIS_TEXT;

  const onClick = useCallback(() => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  }, [page, onPageChange]);

  if (isEllipsis) {
    return (
      <Styled.EllipsisText
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Headline size={300} color="N700">
          {page}
        </Headline>
      </Styled.EllipsisText>
    );
  }

  return (
    <Styled.PaginationButton
      disabled={disabled}
      isSelected={isSelected}
      aria-current={isSelected}
      aria-label={`Page ${page}`}
      onClick={onClick}
    >
      {children}
    </Styled.PaginationButton>
  );
};

const range = (start: number, stop: number) => {
  const output = [];
  for (let i = start; i <= stop; i++) {
    output.push(i);
  }

  return output;
};

const getPaginationButtonContent = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  if (totalPages <= MAX_HANDLES_TO_SHOW) {
    return range(1, totalPages);
  }

  if (totalPages > MAX_HANDLES_TO_SHOW && page <= 4) {
    return [...range(1, 5), ELLIPSIS_TEXT, totalPages];
  }

  if (totalPages - page < 4) {
    return [1, ELLIPSIS_TEXT, ...range(totalPages - 4, totalPages)];
  }

  return [
    1,
    ELLIPSIS_TEXT,
    ...range(page - 1, page + 1),
    ELLIPSIS_TEXT,
    totalPages,
  ];
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const prevDisabled = page === 1 || totalPages === 0;
  const nextDisabled = page === totalPages || totalPages === 0;

  return (
    <Box display="flex" alignItems="center" padding={0} gap={4}>
      <IconButton
        variant="ghost-secondary"
        Icon={
          <InterfaceChevronLeftIcon
            size={12}
            color={prevDisabled ? "N400" : "N600"}
          />
        }
        size={32}
        disabled={prevDisabled}
        onClick={() => {
          if (prevDisabled) {
            return;
          }
          onPageChange(page - 1);
        }}
      />
      {getPaginationButtonContent({ totalPages, page }).map((val, i) => {
        const isSelected = val === page;

        return (
          <PaginationButton
            key={`${val}-${i}`}
            isSelected={isSelected}
            page={val}
            onPageChange={onPageChange}
          >
            {val}
          </PaginationButton>
        );
      })}
      <IconButton
        variant="ghost-secondary"
        Icon={
          <InterfaceChevronRightIcon
            size={12}
            color={nextDisabled ? "N400" : "N600"}
          />
        }
        size={32}
        disabled={nextDisabled}
        onClick={() => {
          if (nextDisabled) {
            return;
          }
          onPageChange(page + 1);
        }}
      />
    </Box>
  );
};
