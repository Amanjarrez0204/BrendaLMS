import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Loginform from "./Componets/LoginFrom";
import { Box } from "@mui/material";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Box sx={{ display: `flez` }}>
          <Box
            component="main"
            // sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px)` } }}
          >
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/registrar" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default App;
