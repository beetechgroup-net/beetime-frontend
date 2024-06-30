import * as React from "react";
import {Order} from "@/interfaces/component/Order";
import {Task} from "@/interfaces/entity/Task";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "@/components/my-tasks/StyledTableCell";
import Checkbox from "@mui/material/Checkbox";
import {HeadCell} from "@/interfaces/component/HeadCell";

export function EnhancedTableHead(props: {
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Task) => void;
}) {
  const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
  const createSortHandler = (property: keyof Task) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
// Define a comparator for sorting
  const headCells: readonly HeadCell[] = [
    {id: 'id', numeric: true, label: 'ID'},
    {id: 'startTime', numeric: false, label: 'Start Time'},
    {id: 'finishTime', numeric: false, label: 'Finish Time'},
    {id: 'duration', numeric: true, label: 'Duration'},
    {id: 'description', numeric: false, label: 'Description'},
    {id: 'category', numeric: false, label: 'Category'},
    {id: 'status', numeric: false, label: 'Status'},
    {id: 'link', numeric: false, label: 'Link'},
  ];
  return (
      <TableHead>
        <TableRow>
          <StyledTableCell padding="checkbox">
            <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{'aria-label': 'select all desserts'}}
            />
          </StyledTableCell>
          {headCells.map((headCell) => (
              <StyledTableCell
                  key={headCell.id}
                  align={'left'}
                  padding="normal"
              >
                {headCell.label}
              </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
  );
}