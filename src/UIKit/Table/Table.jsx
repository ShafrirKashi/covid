import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './Table.css'

function createData(code, inCharge, Quan, open, close, status) {
  return { code, inCharge, Quan, open, close, status };
}

const rows = [
  
  createData('16349', "מאיר אמזלג", "24", "12:23","17:22", "פתוחה"),
  createData('23932', "דנה גרוצקי", "21", "12:23","17:22", "סגורה"),
  createData('75322', "זאב ג'בוטינסקי", "23", "12:23","17:22", "פתוחה"),
  createData('45332', "מיכאל רבינוביץ", "88", "12:23","17:22", "סגורה"),
  createData('73452', "רונית לוי", "22", "12:23","17:22", "פתוחה"),


];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader={true} sx={{ Width: "10px" }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell>מק"ט</TableCell>
            <TableCell align="left">אחראי</TableCell>
            <TableCell align="left">כמות</TableCell>
            <TableCell align="left">נפתחה</TableCell>
            <TableCell align="left">נסגרה</TableCell>
            <TableCell align="left">סטטוס</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.code}
              sx={{ '&:last-child td, &:last-child th': {  border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="left">{row.inCharge}</TableCell>
              <TableCell align="left">{row.Quan}</TableCell>
              <TableCell align="left">{row.open}</TableCell>
              <TableCell align="left">{row.close}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}