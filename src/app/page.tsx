"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import {Order} from "@/interfaces/component/Order";
import {Task} from "@/interfaces/entity/Task";
import {useFetchMyTasks} from "@/hooks/useFetchMyTasks";
import {EnhancedTableHead} from "@/components/my-tasks/EnhancedTableHead";
import {Row} from "@/components/my-tasks/Row";

export default function EnhancedTable() {
  const [orderBy, setOrderBy] = React.useState<keyof Task>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = useFetchMyTasks()
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <EnhancedTableHead
                  numSelected={selected.length}
                  order={"asc"}
                  orderBy={orderBy}
                  onSelectAllClick={() => {}}
                  onRequestSort={() => {}}
                  rowCount={rows.length}
              />
              <TableBody>
                {rows.map((row, index) => <Row key={row.id} row={row} />)}
                {emptyRows > 0 && (
                    <TableRow style={{ height: (53) * emptyRows}}>
                      <TableCell colSpan={12} />
                    </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
  );
}
