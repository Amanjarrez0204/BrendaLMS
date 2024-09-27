import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Appbar from "./Components/AppBar";
import UserSideBar from "./Components/UserSideBar";
import CreateCoursePage from "./pages/CreateCoursePage";
import RutaProtegida from "./Components/RutaProtegida";


  export const checkToken =  () => {
    const token =  localStorage.getItem('token');
    return !!token; 
  };
  const AuthContext = React.createContext();
const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false); 
  // const navigate = useNavigate();
  
const ShowHidden = ({ component, isLogged }) => {
  return isLogged ? component : null; 
};
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = (token) => {
    localStorage.setItem('token', token); 
    setIsLogged(true); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsLogged(false); 
    // navigate("/login");
    
  };


  useEffect(() => {
    const tokenExists = checkToken();
    setIsLogged(tokenExists);

  }, []);

  return (
    
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
    <div>
      <Router>
        {/* <ShowHidden component={<Appbar handleDrawerToggle={handleDrawerToggle} />} isLogged={isLogged} />
        <ShowHidden component={<UserSideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />} isLogged={isLogged} /> */}

        <Grid container>
          <Grid item xs={12}>

              {isLogged && <Appbar handleDrawerToggle={handleDrawerToggle} handleLogout={handleLogout}  />}
              {isLogged && <UserSideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}  />}
             {/* <ShowHidden component={<Appbar handleDrawerToggle={handleDrawerToggle} />} isLogged={isLogged} />
             <ShowHidden component={<UserSideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />} isLogged={isLogged} /> */}
          </Grid>
        </Grid>

        <Box>
          <Box component="main">
          <Routes>
                <Route path="/dashboard" element={<RutaProtegida element={Dashboard} isLogged={isLogged}/>} />
                <Route path="/" element={<LoginPage onLogin={handleLogin}/>} />
              
                <Route path="/registrar" element={<RegisterPage onLogin={handleLogin}/>} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin}/>} />
                <Route path="/create-course" element={<RutaProtegida element={CreateCoursePage} isLogged={isLogged} />} />
              </Routes>

          </Box>
        </Box>
      </Router>
    </div>
 
  </AuthContext.Provider>
   );
};

export default App;
