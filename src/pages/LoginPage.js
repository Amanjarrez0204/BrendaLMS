import React, { useState } from "react";
import Loginform from "../Componets/LoginForm";

import { AppBar, Box, Grid, Typography, Paper } from "@mui/material";
import Appbar from "../Componets/AppBar";
import Sidebar from "../Componets/SideBar";

const LoginPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{}}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* <Grid item xs={12}>
          <Appbar handleDrawerToggle={handleDrawerToggle} />
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Grid> */}

        <Grid item xs={12} justifyContent="center">
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Bienvenido a Learning Management System
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={6}
          sx={{}}
          alignItems="center"
          justifyContent="center"
        >
          <Paper sx={{ p: 4, mx: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
              Iniciar Sesión{" "}
            </Typography>
            <Loginform />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LoginPage;
