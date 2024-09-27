import React from "react";
import { Box, Grid, Typography } from "@mui/material";


const AlumnosList = () => {
    return (
        <Box sx={{}}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* <Grid item xs={12}>
            <Appbar />
            <Sidebar />
            </Grid> */}
    
            <Grid item xs={12} justifyContent="center">
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                Lista de alumnos
            </Typography>
            </Grid>
        </Grid>
        </Box>
    );
    }
    export default AlumnosList;
