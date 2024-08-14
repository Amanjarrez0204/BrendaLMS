import React from "react";
import RegisterFrom from "../Componets/RegisterFrom";
import { Box } from "@mui/material";
import Appbar from "../Componets/AppBar";

const RegisterPage = () =>{
    return (
      


        <Box sx={{display:"flex"}}>
            <h2>Registar usuario</h2>
            <Box component="main" sx= {{flexgrow: 1, p: 3 }}>
                <RegisterFrom/>

                <Appbar/>

            </Box>
          

        </Box>
    )

};
export default RegisterPage;