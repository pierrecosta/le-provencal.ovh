import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  // { field: 'id', headerName: 'N° Entry', width: 180, editable: true},
  { field: 'topic', headerName: 'Main Topic', width: 120, editable: true},
  { field: 'sub_topic', headerName: ' Sub Topic', width: 250, editable: true},
  { field: 'trad_fr', headerName: 'French Traduction', width: 250, editable: true},
  { field: 'trad_pr', headerName: 'Provencal Traduction', width: 180, editable: true  }
];

// const rows = [
//   {id: 1, username: '@MUI1', age: 10},
//   {id: 2, username: '@MUI2', age: 20},
//   {id: 3, username: '@MUI3', age: 30}
// ];

const DictDataGrid = props => {
  // return (
  //   <div style={{ display: 'flex', height: '100%', width: '80%' }}>
  //     <DataGrid rows={rows} columns={columns} />
  //   </div>
  // )
  return(
    <div style={{ marginRight: 'auto', marginLeft: 'auto', height: 300, width: '80%' }}>
      <DataGrid
        rows={props.dataContent}
        columns={columns}
      />
    </div>
  );
}

export default DictDataGrid;