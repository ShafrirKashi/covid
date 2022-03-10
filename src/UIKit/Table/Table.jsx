import * as React from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.css'

import "./Table.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#a7becf",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(code, inCharge, Quan, open, close, status) {
  return { code, inCharge, Quan, open, close, status };
}

const rows = [
  createData("16349", "מאיר אמזלג", "24", "12:23", "17:22", "פתוחה"),
  createData("23932", "דנה גרוצקי", "21", "12:23", "17:22", "סגורה"),
  createData("75322", "זאב ג'בוטינסקי", "23", "12:23", "17:22", "פתוחה"),
  createData("45332", "מיכאל רבינוביץ", "88", "12:23", "17:22", "סגורה"),
  createData("73452", "שון לוי", "22", "12:23", "17:22", "פתוחה"),
  createData("73452", "מעיין כהן", "22", "12:23", "17:22", "פתוחה"),
  createData("73452", "מוטי לוי", "22", "12:23", "17:22", "פתוחה"),
  createData("73452", "יעקב בן דיין", "22", "12:23", "17:22", "פתוחה"),
  createData("73452", "רונית לוי", "22", "12:23", "17:22", "פתוחה"),
];

export default function DenseTable() {
  return (
    <Paper sx={{ width: '100%' }}>
    <TableContainer sx={{ maxHeight: 440 }} >
      <Table stickyHeader={true} aria-label="sticky table">
        <TableHead stickyHeader={true} >
          <StyledTableRow>
            <StyledTableCell>מק"ט</StyledTableCell>
            <StyledTableCell align="left">אחראי</StyledTableCell>
            <StyledTableCell align="left">כמות</StyledTableCell>
            <StyledTableCell align="left">נפתחה</StyledTableCell>
            <StyledTableCell align="left">נסגרה</StyledTableCell>
            <StyledTableCell align="left">סטטוס</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.code}
              </StyledTableCell>
              <StyledTableCell align="left">{row.inCharge}</StyledTableCell>
              <StyledTableCell align="left">{row.Quan}</StyledTableCell>
              <StyledTableCell align="left">{row.open}</StyledTableCell>
              <StyledTableCell align="left">{row.close}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}
