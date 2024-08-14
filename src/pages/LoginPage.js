import React from "react";
import Loginform from "../Componets/LoginFrom";

import { Box } from "@mui/material";

const LoginPage = () =>{
    return (
        <Box sx={{display:"flex"}}>
            <h1>Iniciar Sesion</h1>
            <Box component="main" sx= {{flexgrow: 1, p: 3 }}>
            <Loginform/>

            </Box>
          

        </Box>
    )

};
export default LoginPage;