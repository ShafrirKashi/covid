import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import patients from '../../APIcalls/Patients.json'
import './PatientsList.css'

const columns = [
  {
    field: 'full_name',
    headerName: 'שם',
    width: 160,
    editable: true,
  },
  {
    field: 'test_type',
    headerName: 'סוג בדיקה',
    width: 130,
    editable: true,
  },
  {
    field: 'time',
    headerName: 'שעה',
    // type: 'number',
    width: 80,
    editable: true,
  },
];

export default function DataGridDemo() {
  return (
    <div style={{fontFamily:"Rubik", height: "100%", width: '100%' }}>
      <DataGrid
        rows={patients}
        columns={columns}
        sortingOrder={['asc', 'desc']}
        disableSelectionOnClick
        disableColumnMenu      />
    </div>
  );
}