import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Staff.css";

const columns = [
  { field: "Name", headerName: "שם", width: 130 },
  { field: "Occupation", headerName: "תפקיד", width: 100 },
  { field: "lastName", headerName: "מספר עובד", width: 130 },
];

const rows = [
  { id: 1, Name: "מוטי כץ", Occupation: "בודק" },
  { id: 2, Name: "רוני אליהו", Occupation: "בודק" },
  { id: 3, Name: "שלומי כהן", Occupation: "בודק" },
  { id: 4, Name: "מאיר משולם", Occupation: "בודק" },
  { id: 5, Name: "רוויטל סוויד", Occupation: "בודק" },
  { id: 6, Name: "שי נחום", Occupation: "בודק" },
  { id: 7, Name: "רונן פרץ", Occupation: "בודק" },
  { id: 8, Name: "איתי שדה", Occupation: "בודק" },
  { id: 9, Name: "אייל קרמר", Occupation: "בודק" },
];

export default function DataTable() {
  return (
    <div className="staffMain" style={{ height: "93vh", width: "100vw" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
