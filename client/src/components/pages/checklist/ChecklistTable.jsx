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

function createData(ign, una, chaos, guardian) {
  return { ign, una, chaos, guardian };
}

const rows = [
  createData('Kuhway', true, true, true),
  createData('Kuhgay', true, false, false),
  createData('Seleno', false, true, false),
  createData('Gawybawy', false, false, false),
  createData('Yushigi', false, false, false),
];

const cellHeight = 20;

class ChecklistTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: rows,
    }

    this.updateCheckbox = this.updateCheckbox.bind(this);
  }

  updateCheckbox(e, character, field) {
    console.log(e.target.checked);
    this.state.data[this.state.data.findIndex(row => row.ign == character)][field] = e.target.checked;
    this.setState({
      data: this.state.data
    });
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
          </TableRow>
          <TableBody sx={{ display: 'flex' }}>
            {rows.map((row) => (
              <TableRow key={row.ign} sx={{ display: 'flex', flexDirection: 'column' }}>
                <TableCell scope="row" sx={{ height: `${cellHeight}px` }}>
                  <Typography>
                    {row.ign}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                  <Checkbox
                    checked={row.una}
                    sx={{ height: `${cellHeight}px` }}
                    onChange={(e) => this.updateCheckbox(e, row.ign, 'una')}/>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                <Checkbox
                    checked={row.chaos}
                    sx={{ height: `${cellHeight}px` }}
                    onChange={(e) => this.updateCheckbox(e, row.ign, 'chaos')}/>
                </TableCell>
                <TableCell align="center" sx={{ height: `${cellHeight}px` }}>
                <Checkbox
                    checked={row.guardian}
                    sx={{ height: `${cellHeight}px` }}
                    onChange={(e) => this.updateCheckbox(e, row.ign, 'guardian')}/>
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