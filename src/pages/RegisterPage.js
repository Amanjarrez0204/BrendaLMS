import React from "react";
import RegisterFrom from "../Componets/RegisterFrom";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Appbar from "../Componets/AppBar";

const RegisterPage = () => {
  return (
    <Box sx={{}}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Appbar />
        </Grid>

        <Grid item xs={12} justifyContent="center">
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Bienvenido a Learning Management System
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{}} alignItems="center" justifyContent="center">
          <Paper sx={{ p: 4, m: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
              Registar usuario
            </Typography>
            <RegisterFrom />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default RegisterPage;
