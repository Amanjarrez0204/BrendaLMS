import React from "react";
import {Box, Typography} from "@mui/material"




const HomePage = () => {

    return(
        <Box sx={{display: 'flex'}}>
        

            <Typography variant="h6" gutterBottom>
                Bienvenido a Learning Management System
            </Typography>
            <Box>
                 <img src="/logo.png" alt="Bootcamp"  style={{ width: '50%', height: 'auto' }} />
            </Box>
           
           

            
        </Box>
    );
};
export default HomePage;