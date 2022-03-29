import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import WorkerLine from '../../UIKit/WorkerLine/WorkerLine'
import "./Staff.css";

const columns = [
  { field: "Name", headerName: "שם", width: 130 },
  { field: "Occupation", headerName: "תפקיד", width: 100 },
  { field: "lastName", headerName: "מספר עובד", width: 130 },
];

const rowsData = [
  { id: 1, name: "מוטי כץ", occupation: "בודק", workerNum:"293847", position: "1"},
  { id: 2, name: "רוני אליהו", occupation: "בודק" , workerNum:"356344", position: "2"},
  { id: 3, name: "שלומי כהן", occupation: "בודק", workerNum:"634642", position: "3" },
  { id: 4, name: "מאיר משולם", occupation: "בודק", workerNum:"833574", position: "4" },
  { id: 5, name: "רוויטל סוויד", occupation: "בודק", workerNum:"253463", position: "5" },
  { id: 6, name: "שי נחום", occupation: "בודק", workerNum:"611353", position: "6" },
  { id: 7, name: "רונן פרץ", occupation: "בודק" , workerNum:"834376", position: "7"},
  { id: 8, name: "איתי שדה", occupation: "בודק" , workerNum:"127492", position: "8"},
  { id: 9, name: "אייל קרמר", occupation: "בודק" , workerNum:"425634", position: "9"},
  { id: 10, name: "זאב לוי", occupation: "בודק" , workerNum:"763424", position: "10"},
  { id: 11, name: "אייל קרמר", occupation: "בודק" , workerNum:"427184", position: "11"},
  { id: 12, name: "שרון מרציאנו", occupation: "בודק" , workerNum:"960312", position: "12"},
];

export default function DataTable({rows}) {
  return (
    <div className="staffMain" style={{ height: "90vh", width: "100vw" }}>
   <WorkerLine rows={rowsData} />
    </div>
  );
}
