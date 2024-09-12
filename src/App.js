import React, { useState, useEffect } from "react";
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
// import CreateCourseForm from "./Componets/CreateCourseForm";
import CreateCoursePage from "./pages/CreateCoursePage";
import RutaProtegida from "./Componets/RutaProtegida";




function App() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

 


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const tokenTrue = localStorage.getItem('token');
const checkToken = async () => {
  
      const token = await localStorage.getItem('token');
      setIsLogged(!!token);
      // loggedIn = true;
    };
  useEffect(() => {
    

    checkToken();
    // hanldleComponentsIfLoggedIn();
    handleShowComponentsIfLoggedIn()

  }, []);

let appbarComponent = "";
let userSidebarComponent = "";

if (isLogged) {
  // const appbarComponent = async () => {<Appbar handleDrawerToggle={handleDrawerToggle} />;}
  appbarComponent = <Appbar handleDrawerToggle={handleDrawerToggle} />;
  userSidebarComponent = (
    <UserSideBar
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
    />
  );
}


  const handleShowComponentsIfLoggedIn = () => {
    if (isLogged) {
      return (
        <div>
          <Appbar handleDrawerToggle={handleDrawerToggle} />
          <UserSideBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </div>
      );
    }
  }








  
  return (
    <div>
      <Router>
        <Box >
          <Box component="main">           
           {/* Main Box Component's Background color was defined in the css body Rule*/}
          
          
            <Grid item xs={12}>

            

            {appbarComponent}
            {userSidebarComponent}
               {/* {handleShowComponentsIfLoggedIn()} */}
            </Grid>

            <Routes>
              {/* <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/registrar" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-course" element={<CreateCoursePage />} /> */}
              
              <Route path="/dashboard" element={<RutaProtegida element={Dashboard} />} />
              <Route path="/" element={<LoginPage />} />
              {/*<Route path="/dashboard" element={<Dashboard />} />*/}
              <Route path="/registrar" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-course" element={<RutaProtegida element={CreateCoursePage} />} />
    



            </Routes>
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default App;
