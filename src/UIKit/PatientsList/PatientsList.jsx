import React, { useMemo } from "react";
import { useTable, useSortBy, useRowSelect,useFilters,useBlockLayout } from "react-table";
import { DataGrid } from "@mui/x-data-grid";
import DATA from "../../APIcalls/Patients.json";
import "./PatientsList.css";


const COLUMNS = [
  {
    Header: "שעת בדיקה",
    accessor: "time",
    width: 50,
    editable: true,
  },
  {
    Header: "שם",
    accessor: "full_name",
    width: 160,
    editable: true,
  },
  {
    Header: "סוג בדיקה",
    accessor: "test_type",
    width: 130,
    editable: true,
  },
];

export default function DataGridDemo() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
      columns,
      data,
      initialState: {
        sortBy: [{ id: "time", desc: false }],
      }
    },
    useSortBy,
    );

  return (
    <div style={{ fontFamily: "Rubik", height: "100%", width: "100%" }}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
