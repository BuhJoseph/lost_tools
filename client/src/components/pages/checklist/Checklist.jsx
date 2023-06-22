import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import ChecklistTable from './ChecklistTable.jsx';


class Checklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box sx={{ padding: '10px' }}>
        <ChecklistTable />
      </Box>
    );
  };
}

export default Checklist;