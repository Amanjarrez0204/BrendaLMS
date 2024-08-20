import React from "react";
import { Box, Typography, Grid, Paper, Button, List, ListItem } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
 
import AlumnosList from "../Componets/AlumnosList";
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} >
        
        <Grid item sx={{  width: "100%", my:0, mx:{
          xs: 2,
          md: 0
        } }}>
          <Paper sx={{p:2}} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Perfíl" {...a11yProps(0)} />
          <Tab label="Como maestro" {...a11yProps(1)} />
          <Tab label="Como alumno" {...a11yProps(2)} />
        </Tabs>
      </Box>
          </Paper>
        </Grid>
        
          
          
          <Grid item sx={{  width:"100%", p:0,  my:0, mx:{
              xs: 2,
              md: 0
            } }}>
              

                
                <CustomTabPanel value={value} index={0} sx={{p:0}}>
                  {/* <Grid container spacing={2}  > */}
                 <Grid container xs={12}  sx={{}}>
                    <Grid item sx={{p:0}} >
                      <Paper sx={{p:2, display:"flex" }} >
                        <Avatar sx={{width:100, height:100}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            
                        <Box sx={{p:2}}>
                          <Typography variant="h6" gutterBottom component="div">
                            Item One a
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Item One
                          </Typography>
                        </Box>
                    
                      </Paper>  
                    </Grid>
                  </Grid>
                  {/* </Grid>   */}
                </CustomTabPanel>
          
             
          
          <CustomTabPanel value={value} index={1}>
      
            <Grid container spacing={2}>
                    <Grid item>
                      <Paper sx={{p:2, display:"flex" }} >
                        <Avatar sx={{width:100, height:100}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            
                        <Box sx={{p:2}}>
                          <Typography variant="h6" gutterBottom component="div">
                            Item One
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Item One
                          </Typography>
                        </Box>
                    
                      </Paper>  
                    </Grid>
                    <Grid item>
                      <Paper sx={{p:2, display:"flex" }} >
                        <Avatar sx={{width:100, height:100}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            
                        <Box sx={{p:2}}>
                          <Typography variant="h6" gutterBottom component="div">
                            Item One
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Item One
                          </Typography>
                        </Box>
                    
                      </Paper>  
                    </Grid>
                  </Grid>  
      
          </CustomTabPanel>
      
      
      <CustomTabPanel value={value} index={2}>
      
      <Grid container spacing={2}>
                  <Grid item>
                    <Paper sx={{p:2, display:"flex" }} >
                      <Avatar sx={{width:100, height:100}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          
                      <Box sx={{p:2}}>
                        <Typography variant="h6" gutterBottom component="div">
                          Item One
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          Item One
                        </Typography>
                      </Box>
                  
                    </Paper>  
                  </Grid>
                  <Grid item>
                    <Paper sx={{p:2, display:"flex" }} >
                      <Avatar sx={{width:100, height:100}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          
                      <Box sx={{p:2}}>
                        <Typography variant="h6" gutterBottom component="div">
                          Item One
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          Item One
                        </Typography>
                      </Box>
                  
                    </Paper>  
                  </Grid>
                </Grid>  
      
      </CustomTabPanel>
            
        </Grid>
      </Grid>
      
          
  
      
      
    </Box>
  );
}



const Dashboard = () => {






  
  return (
    <Box sx={{  }}>

      <Grid container   justifyContent="center">
        <Grid item xs={12} sm={12} md={3}>
          <Paper sx={{ m:2 }}>
            <Grid container   alignItems="center">

            
              <Grid
                item
                xs={12}
                sm={3}
                md={12}
                sx={{
                   display: "grid",
                   justifyContent: {
                    xs: "center", 
                    sm: "right",
                    md: "center"
                  },

                  p:2
                }}
              >
                <Avatar
                  sx={{ width:{
                    xs: 100,
                    md: 200
                  } , height: {
                     xs: 100,
                    md: 200} }}
                  src="/broken-image.jpg"
                />
              </Grid>
              <Grid
                item
                sx={{
                  display: "grid",
                  flexWrap:"wrap",
                  justifyContent: {
                    xs: "center", 
                    sm: "start",
                          md: "center"
                  },
                  
                }}
                xs={12}
                sm={6}
                md={12}
              >
                <Box sx={{display: "grid", alignItems:  "space-evenly", textAlign: "left"}}>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: 
                      {xs:"center",
                        sm:"left",
                        md: "center" 
                      }  }}
                  >
                    Nombre de Admin
                  </Typography>
                  <Typography
                    variant="body"
                    component="div"
                    sx={{ textAlign: 
                      {xs:"center",
                        sm:"left",
                        md: "center" 
                      }  }}
                  >
                    Administrador
                  </Typography>
    
                  <Link to="#">
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ textAlign: 
                        {xs:"center",
                          sm:"left",
                          md: "center" 
                        }  }}
                    >
                      <DownloadIcon sx={{ verticalAlign: "middle", textAlign: "center", alignItems:  "space-evenly" }} />
                      Editar info
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid   item xs={12} sm={3} md={12} sx={{
                  display: "grid",
                  flexWrap:"wrap",
                  justifyContent: {
                    xs: "center",
                    sm: "start",
                    md: "center"
                  },
                  
                }}
                >
                  <Button variant="contained" color="primary" sx={{margin: 2}}>
                      Administrar
                  </Button>
              </Grid>
            
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sx={{mt:{
          xs: 0,
        md: 2
      }}}>
 <BasicTabs sx={{  }}/> 
      
       
        
        </Grid>
        </Grid>
      {/* </Grid> */}
    </Box>
  );
};

export default Dashboard;
