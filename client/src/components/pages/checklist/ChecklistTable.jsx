import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const cellHeight = 20;

class ChecklistTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableContainer component={Paper} sx={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
        <Table sx={{ display: 'flex' }}>
          <TableRow sx={{ display: 'flex', flexDirection: 'column' }}>
            <TableCell sx={{ height: `${cellHeight}px` }}>
              <Typography>Character</Typography>
            </TableCell>
            <TableCell sx={{ height: `${cellHeight}px` }}>
              <Typography>Una Tasks</Typography>
            </TableCell>
            <TableCell sx={{ height: `${cellHeight}px` }}>
              <Typography>Chaos Dunegon</Typography>
            </TableCell>
            <TableCell sx={{ height: `${cellHeight}px` }}>
              <Typography>Guardian Raid</Typography>
            </TableCell>
            <TableCell sx={{ height: `${cellHeight}px` }}>
              <Typography>something</Typography>
            </TableCell>
          </TableRow>
          <TableBody sx={{ display: 'flex' }}>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ display: 'flex', flexDirection: 'column' }}>
                <TableCell scope="row" sx={{ height: `${cellHeight}px` }}>
                  <Typography>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                  <Checkbox sx={{ height: `${cellHeight}px` }}/>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                  <Checkbox sx={{ height: `${cellHeight}px` }}/>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                  <Checkbox sx={{ height: `${cellHeight}px` }}/>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                  <Checkbox sx={{ height: `${cellHeight}px` }}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    );
  }
}

export default ChecklistTable;