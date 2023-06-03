import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import {
  Button,
  Paper,
  Rating,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

function FormTable() {
  const { formList, removeFromFormList } = useContext(AppContext);
  const [snackBarOpen, setSnackbarOpen] = useState(false);

  const handleClick = (id) => {
    removeFromFormList(id);
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Idade</TableCell>
              <TableCell>Nota</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Rating value={row.rating} readOnly />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleClick(row.id)}>
                    <DeleteOutline />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item removido com sucesso!"
      />
    </>
  );
}

export default FormTable;
