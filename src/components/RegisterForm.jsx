import {
  Button,
  FormControl,
  FormLabel,
  Rating,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

// import { Container } from './styles';

function RegisterForm() {
  const { form, setForm, submitForm } = useContext(AppContext);
  const [snackBarOpen, setSnackbarOpen] = useState(false);
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    submitForm();
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
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <TextField
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <FormLabel>Idade</FormLabel>
        <TextField
          type="number"
          value={form.age}
          InputProps={{ inputProps: { min: 0 } }}
          onChange={(e) => handleChange("age", e.target.value)}
        />

        <FormLabel>Qual nota você dá para a EBAC?</FormLabel>
        <Rating
          name="rating"
          value={form.rating}
          onChange={(e) => handleChange("rating", e.target.value)}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </FormControl>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Formulário cadastrado com sucesso!"
      />
    </>
  );
}

export default RegisterForm;
