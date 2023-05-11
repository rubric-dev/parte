import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
  getGroupedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { TableTemplateProps } from "./Table.types";
import * as Styled from "./Table.styled";

export const TableTemplate = <T,>({
  data,
  columns,
  enableRowSelection,
  selectable,
  selectedRowId,
  onSelect,
  sticky,
  showBorder = false,
}: TableTemplateProps<T>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    enableRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <Styled.Table showBorder={showBorder}>
      <Styled.HeaderContainer sticky={sticky}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Styled.HeaderRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <Styled.Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </>
                  )}
                </Styled.Th>
              );
            })}
          </Styled.HeaderRow>
        ))}
      </Styled.HeaderContainer>
      <Styled.Body>
        {table.getRowModel().rows.map((row) => {
          return (
            <Styled.Row
              key={row.id}
              selectable={selectable}
              onSelect={() => onSelect?.(row.id)}
              selected={row.id === selectedRowId}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {cell.getIsAggregated()
                      ? // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        flexRender(
                          cell.column.columnDef.aggregatedCell ??
                            cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      : cell.getIsPlaceholder()
                      ? null // For cells with repeated values, render null
                      : // Otherwise, just render the regular cell
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                  </td>
                );
              })}
            </Styled.Row>
          );
        })}
      </Styled.Body>
    </Styled.Table>
  );
};
