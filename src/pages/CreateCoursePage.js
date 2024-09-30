import React, { useState } from "react";
// import EditCourseForm from "../Components/EditCourseForm";
import CreateCourseForm from "../Components/CreateCourseForm";
import { AppBar, Box, Grid, Paper, Typography } from "@mui/material";


const CreateCoursePage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
           
            <CreateCourseForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CreateCoursePage;
