import { memo } from "react";
import { Paragraph } from "../@foundations/Typography";
import { Dropdown } from "../Dropdown";
import { Box } from "../Layout";
import { BoxProps } from "../Layout/Box.types";
import { Menu } from "../Menu";
import { ActionFilterIcon, CaretDownIcon } from "../../../parte-icons/src";
import * as Styled from "./Table.styled";
import {
  BodyProps,
  CellProps,
  FilterHeaderProps,
  HeaderCellProps,
  HeaderContainerProps,
  HeaderRowProps,
  RowProps,
  TableFilterBarProps,
} from "./Table.types";

export const Table = ({
  children,
  display = "flex",
  flexDirection = "column",
  ...args
}: BoxProps) => {
  return (
    <Styled.Table display={display} flexDirection={flexDirection} {...args}>
      {children}
    </Styled.Table>
  );
};

const HeaderContainer = ({
  children,
  display = "flex",
  flexDirection = "column",
  ...args
}: HeaderContainerProps) => {
  return (
    <Styled.HeaderContainer
      display={display}
      flexDirection={flexDirection}
      {...args}
    >
      {children}
    </Styled.HeaderContainer>
  );
};

const Body = ({
  children,
  display = "flex",
  flexDirection = "column",
  ...args
}: BodyProps) => {
  return (
    <Styled.Body display={display} flexDirection={flexDirection} {...args}>
      {children}
    </Styled.Body>
  );
};
const HeaderRow = ({ children, ...args }: HeaderRowProps) => {
  return <Styled.HeaderRow {...args}>{children}</Styled.HeaderRow>;
};
const Row = ({ children, onSelect, ...args }: RowProps) => {
  return (
    <Styled.Row onClick={onSelect} {...args}>
      {children}
    </Styled.Row>
  );
};

export const HeaderCell = memo(
  ({
    children,
    display = "flex",
    alignItems = "center",
    height = 48,
    padding = 8,
    ...args
  }: HeaderCellProps) => {
    return (
      <Styled.HeaderCell
        display={display}
        alignItems={alignItems}
        height={height}
        padding={padding}
        {...args}
      >
        {children}
      </Styled.HeaderCell>
    );
  }
);

export const Cell = memo(
  ({
    children,
    display = "flex",
    alignItems = "center",
    height = 64,
    padding = 8,
    ...args
  }: CellProps) => {
    return (
      <Styled.Cell
        display={display}
        alignItems={alignItems}
        height={height}
        padding={padding}
        {...args}
      >
        {children}
      </Styled.Cell>
    );
  }
);

export const TableFilterBar = ({ onClear, countInfo }: TableFilterBarProps) => {
  const countText = countInfo
    ? `${countInfo.currentCount}/${countInfo.totalCount} fields shown. `
    : "";
  return (
    <Styled.TableFilterBar>
      <ActionFilterIcon size={16} />
      <Paragraph size={100} color="N700">
        {`Filter Aplied. ${countText}`}
        <Styled.ClearFilter type="button" onClick={onClear}>
          Clear filter
        </Styled.ClearFilter>
      </Paragraph>
    </Styled.TableFilterBar>
  );
};

export const FilterHeader = <T, K>({
  column,
  options,
  children,
}: FilterHeaderProps<T, K>) => {
  const filter = column.getFilterValue();
  const prevFilter = column.getFilterValue();
  const columnId = column.id;

  const renderOptions =
    options ??
    Array.from(column.getFacetedUniqueValues().keys())
      .sort()
      .map((item) => ({
        label: item,
        value: item,
      }));

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Box
          display="flex"
          alignItems="center"
          gap={4}
          style={{ cursor: "pointer" }}
        >
          {children ?? columnId}
          <CaretDownIcon size={16} />
        </Box>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {({ onClose }) => (
          <Menu>
            <Menu.Group title="Filter">
              {renderOptions.map(({ value, label }) => (
                <Menu.Row
                  key={label}
                  onSelect={() => {
                    column.setFilterValue(
                      prevFilter === value ? undefined : value
                    );
                    onClose?.();
                  }}
                  selected={value === filter}
                >
                  {label}
                </Menu.Row>
              ))}
            </Menu.Group>
          </Menu>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

Table.HeaderContainer = HeaderContainer;
Table.Body = Body;
Table.HeaderRow = HeaderRow;
Table.Row = Row;

HeaderCell.displayName = "HeaderCell";
Cell.displayName = "Cell";

Table.HeaderCell = HeaderCell;
Table.Cell = Cell;
