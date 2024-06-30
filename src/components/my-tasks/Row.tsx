import {Task} from "@/interfaces/entity/Task";
import * as React from "react";
import {StyledTableRow} from "@/components/my-tasks/StyledTableRow";
import {StyledTableCell} from "@/components/my-tasks/StyledTableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

export function Row(props: { row: Task }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
      <>
        <StyledTableRow>
          <StyledTableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {row.id}
          </StyledTableCell>
          <StyledTableCell align="left">{row.startTime}</StyledTableCell>
          <StyledTableCell align="left">{row.finishTime}</StyledTableCell>
          <StyledTableCell align="left">{row.duration}</StyledTableCell>
          <StyledTableCell align="left">{row.description}</StyledTableCell>
          <StyledTableCell align="left">{row.category}</StyledTableCell>
          <StyledTableCell align="left">{row.status}</StyledTableCell>
          <StyledTableCell align="left">{row.link}</StyledTableCell>
        </StyledTableRow>
        <TableRow>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>ID</StyledTableCell>
                      <StyledTableCell>Start Time</StyledTableCell>
                      <StyledTableCell align="left">Finish Time</StyledTableCell>
                      <StyledTableCell align="left">Duration</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                        <StyledTableRow key={historyRow.id}>
                          <StyledTableCell component="th" scope="row">
                            {historyRow.id}
                          </StyledTableCell>
                          <StyledTableCell>{historyRow.startTime}</StyledTableCell>
                          <StyledTableCell align="left">{historyRow.finishTime}</StyledTableCell>
                          <StyledTableCell align="left">{historyRow.duration}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
      </>

  );
}
