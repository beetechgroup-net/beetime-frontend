import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    initialDate: string,
    finishDate: string,
    duration: number,
    description: string,
) {
  return {
    initialDate,
    finishDate,
    duration,
    description
  };
}

const rows = [
  createData('20/06/2024 07:35', '20/06/2024 08:35', 1, "Task #656 Criando o arquivo XXX"),
  createData('20/06/2024 07:35', '20/06/2024 08:35', 1, "Task #656 Criando o arquivo XXX"),
  createData('20/06/2024 07:35', '20/06/2024 08:35', 1, "Task #656 Criando o arquivo XXX"),
  createData('20/06/2024 07:35', '20/06/2024 08:35', 1, "Task #656 Criando o arquivo XXX"),
];

export default function BasicTable() {
  return (
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Start Time</TableCell>
              <TableCell>Finish Time</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow
                    key={row.initialDate}
                    // sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component="th" scope="row">
                    {row.initialDate}
                  </TableCell>
                  <TableCell>{row.finishDate}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}