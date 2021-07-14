import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "id", label: "Player ID", minWidth: 170 },
  { id: "slot", label: "Slots", minWidth: 100 },
  { id: "time", label: "Time", minWidth: 170 },
];

function createData(id, slot, time) {
  return { id, slot, time };
}

const rows = [
  createData(3287263, 1, "13:00"),
  createData(9596961, 2, "14:00"),
  createData(301340, 1, "3:00"),
  createData(9833520, 3, "17:00"),
  createData(9984670, 2, "13:30"),
  createData(7692024, 1, "16:00"),
  createData(357578, 3, "18:00"),
  createData(70273, 2, "19:50"),
  createData(1972550, 3, "20:00"),
  createData(377973, 1, "20:30"),
  createData(640679, 3, "23:30"),
  createData(242495, 2, "12:30"),
  createData(17098246, 1, "7:00"),
  createData(23768, 2, "18:00"),
  createData(8515767, 3, "20:00"),
];

const useStyles = makeStyles({
  root: {
    width: "50%",
    padding: "10px",
    background: "#282c34",
    color: "#FFD700",
  },
  container: {
    maxHeight: 300,
    maxWidth: 800,
    background: "#282c34",
  },
});

function Tabless() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "#FFD700",
                    background: "#282c34",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ color: "#FFD700" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        style={{ color: "#FFD700" }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Tabless;
