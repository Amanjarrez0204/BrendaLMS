import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Box, Grid, Typography, Paper } from "@mui/material";

import RegisterPage from "./pages/RegisterPage";
import Loginform from "./Componets/LoginForm";

import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

import alumnosList from "./Componets/AlumnosList";
import Appbar from "./Componets/AppBar";
import Sidebar from "./Componets/SideBar";
import UserSideBar from "./Componets/UserSideBar";
// import CreateCourseForm from "./Componets/CreateCourseFrom";
import CreateCoursePage from "./pages/CreateCoursePage";
import RutaProtegida from "./Componets/RutaProtegida";

function App() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <div>
      <Router>
        <Box >
          <Box component="main">           
           {/* Main Box Component's Background color was defined in the css body Rule*/}
          
          
            <Grid item xs={12}>
              <Appbar handleDrawerToggle={handleDrawerToggle} />
              <Sidebar
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
              />
             Pablo Main
            </Grid>

            <Routes>
            <Route path="/dashboard" element={<RutaProtegida element={Dashboard} />} />
              <Route path="/" element={<LoginPage />} />
              {/*<Route path="/dashboard" element={<Dashboard />} />*/}
              <Route path="/registrar" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-course" element={<CreateCoursePage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default App;
