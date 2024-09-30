import React, { useState } from "react";
import EditCourseForm from "../Components/EditCourseForm";
import { AppBar, Box, Grid, Paper, Typography } from "@mui/material";

import { useLocation } from 'react-router-dom';



const EditCoursePage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const location = useLocation();
  const { cursoId, cursoName } = location.state || {};
  return (
    <Box >
      <Grid
        container
        
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
 
        <Grid item xs={12} justifyContent="center">
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Bienvenido a Learning Management System
          </Typography>
          <Typography>
            {cursoId} - {cursoName}
            
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          sx={{}}
          alignItems="center"
          justifyContent="center"
        >
          <Paper sx={{ p: 4, mx: 4 }}>
           
            <EditCourseForm
            cursoId={cursoId}
            cursoName={cursoName}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EditCoursePage;
