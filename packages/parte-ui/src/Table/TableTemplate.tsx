import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, useCallback, useState } from "react";
import { Table, TableFilterBar } from "./Table";
import { TableTemplateProps } from "./Table.types";

export const TableTemplate = <T,>({
  data,
  columns,
  enableRowSelection,
  selectable,
  selectedRowId,
  onSelect,
  sticky,
  showBodyBorder = true,
  showHeaderBorder = true,
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
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  const onClear = useCallback(() => setColumnFilters([]), []);

  const totalCount = data.length;
  const currentCount = table.getFilteredRowModel().rows.length;
  const countInfo = {
    totalCount,
    currentCount,
  };

  return (
    <Table>
      <Table.HeaderContainer sticky={sticky} showBorder={showHeaderBorder}>
        {columnFilters.length > 0 && (
          <TableFilterBar onClear={onClear} countInfo={countInfo} />
        )}
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.HeaderRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Fragment key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Fragment>
            ))}
          </Table.HeaderRow>
        ))}
      </Table.HeaderContainer>
      <Table.Body showBorder={showBodyBorder}>
        {table.getRowModel().rows.map((row) => (
          <Table.Row
            key={row.id}
            selectable={selectable}
            onSelect={() => onSelect?.(row.id)}
            selected={row.id === selectedRowId}
          >
            {row.getVisibleCells().map((cell) => (
              <Fragment key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Fragment>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
