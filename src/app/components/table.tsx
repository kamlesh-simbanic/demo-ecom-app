"use client";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

type ColumnType<T> = {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: T) => React.ReactNode;
};

type PropsType<T> = {
  rows: T[];
  columns: ColumnType<T>[];
};

const TableComponent = <T extends Record<string, any>>({
  rows,
  columns,
}: PropsType<T>) => {
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof T) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (sortBy) {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key.toString()}
              onClick={() => column.sortable && handleSort(column.key)}
            >
              {column.label}
              {column.sortable && (
                <span>
                  {sortBy === column.key
                    ? sortDirection === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key.toString()}>
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
