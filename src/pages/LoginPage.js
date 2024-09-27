import React, { useState, useEffect } from "react";
import Loginform from "../Components/LoginForm";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { checkToken } from "../App";
import { useAuth } from "../AuthContext"; 
import { useNavigate } from "react-router-dom";




const LoginPage = ({ onLogin }) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  if (isLogged) {
    // onLogin();
    navigate("/dashboard");
  }
  useEffect(() => {
    const tokenExists = checkToken();
    setIsLogged(tokenExists);
    

  }, []);
  return (
    <Box sx={{}}>
      {isLogged && navigate("/dashboard")}

      <Grid container spacing={2} alignItems="center" justifyContent="center">

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
              Iniciar Sesión 
            </Typography>
            <Loginform onLogin={onLogin}  />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LoginPage;
