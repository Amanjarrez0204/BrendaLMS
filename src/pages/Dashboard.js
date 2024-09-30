import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  Divider,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import AlumnosList from "../Components/AlumnosList";
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import axios from "axios";
import ImageIcon from "@mui/icons-material/Image";
import AspectRatio from "@mui/joy/AspectRatio";
import { styled } from '@mui/material/styles';


import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ViewIcon from '@mui/icons-material/Visibility';

import { checkToken } from "../App";



// useEffect para verificar el token cuando se monta la aplicación



const Dashboard = () => {
   const navigate = useNavigate();
   useEffect(() => {
    checkToken();
  
  }, [])
  const [cursos, setCursos] = useState([]); // Hook para manejar la lista de cursos
  
  const [value, setValue] = useState(1);

  const handleCursosVerticalMenu =  (event, option, curso) => {
  

    console.log("Event: ", event, "Option: ", option, "Curso: ", curso);

    if (option.label === "View Course"
    ) {
    console.log("Ver curso");
    // handleEditCurso(option, curso);
  }
    if (option.label === "Edit Course"
      ) {
      console.log("Editando curso");
      handleEditCurso(option, curso);
    }
    if (option.label === 2) {
      console.log("Delete course");
      deleteCurso(curso._id);
    }

   
    console.log("Event Name: ", event.name, "Event Target: ", event.target);
   console.log("What is curso: ", curso._id)
   console.log("What is curso: ", option.label)


     };

     const handleEditCurso = (
      option,
      curso
     ) => {

      navigate("/editar-curso", { state: { cursoId: curso._id, cursoName: curso.titulo } });
    };
      
  const deleteCurso = async (cursoID) => {
    console.log(cursoID._id)
    try {
      // console.log(draft);
      
      const response = await axios.delete("http://localhost:3001/api/cursos/" + cursoID._id);
      alert("Curso " + cursoID.titulo + " eliminado con éxito");
      console.log(response.data);
      // setCursos()
      handleCursos();
      // window.location.href = "/dashboard";
      // const navigate = useNavigate();
      // navigate("/dashboard");
      // window.location.reload();
    } catch (err) {
      console.log("Que fue lo que paso ???");
      // console.log(err.response.data);
      console.log(err);
      // alert(`Error al registrar curso ${formValues.titulo}`);
    }
  };
  
  
  
  const options = [
    {
      icon: <ViewIcon sx={{ marginRight: 2, color: 'lightgray' }} />,
      label: 'View Course'
    },
    {
      icon: <EditIcon sx={{ marginRight: 2, color: 'lightgray' }} />,
      label: 'Edit Course'
    },
    {
      icon: <DeleteIcon sx={{ marginRight: 2, color: 'lightgray' }} />,
      label: 'Delete Course',
      
    }
  ];
  
  const ITEM_HEIGHT = 48;
  
  
  
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
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function LongMenu({ curso }) {
    const [anchorEl, setAnchorEl] =  useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          // PaperProps={{
          //   style: {
          //     maxHeight: ITEM_HEIGHT * 4.5,
          //     width: '20ch',
          //   },
          // }}
        >
          {options.map((option) => (
            // <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
             <MenuItem key={option} 
             selected={option === 'Pyxis'}
             onClick={(e) => handleCursosVerticalMenu(e, option, curso)}>
  
                      
              {option.icon} {option.label}
          
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }

  function BasicTabs() {

    
   
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
      <Box
        sx={{
          mr: {
            xs: 0,
            md: 2,
          },
          
        }}
      >
        <Grid container spacing={2} direction={"column"} sx={{    }}>
          <Grid
            item
            sx={{
              my: 0,
              mx: {
                xs: 2,
                md: 0,
              },
            }}
          >
            <Paper sx={{ p: 2, display: "flex" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value || 0}
                  onChange={handleChange}
                  aria-label="basic tabs example">

                    <Tab key="1" label="Perfíl" {...a11yProps(0)} />
                    <Tab key="2" label="Como maestro" {...a11yProps(1)} onClick={handleCursos} />
                    <Tab key="3" label="Como alumno" {...a11yProps(2)} />
                                    
                </Tabs>
                
              </Box>
              <Box sx={{display: "flex", flex: "auto", alignItems: "center", justifyContent: "flex-end"}} >
              <Button  
                variant="contained"
                color="primary"
                component={Link}
                to="/create-course"
              >
                  + Crear curso
                    </Button>
              </Box>
            </Paper>
          </Grid>
  
          <CustomTabPanel key="1" value={value} index={0} sx={{}}>
            <Box
              sx={{
                m: {
                  xs: "8px",
                  md: "-8px",
                },
                mr: {
                  xs: "-8px",
                  md: "-24px",
                },
                mt: {
                  xs: "-24px",
                  md: "-24px",
                },
              }}
            >
              <Grid container spacing={2} direction={"column"}>
                <Grid item>
                  <Paper sx={{ p: 2, display: "flex" }}>
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
  
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Perfíl
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Descripción
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper sx={{ p: 2, display: "flex" }}>
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
  
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Perfíl
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Descripción
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button variant="contained" color="primary">
                        Editar
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel key="2" value={value} index={1} sx={{ p: 0 }}>
            <Box
              sx={{
                m: {
                  xs: "8px",
                  md: "-8px",
                },
                mr: {
                  xs: "-8px",
                  md: "-24px",
                },
                mt: {
                  xs: "-24px",
                  md: "-24px",
                },
              }}
            >
              <Grid container spacing={2} direction={"column"}>
                {/* Array de cursos */}
                {cursos.map((curso, index) => (
                  <Grid key={index} item>
                    <Paper sx={{ 
                          p: 2,
                          display: "flex",
                          flexDirection: {
                            xs: 'column-reverse',
                            sm: 'row'
                          }}}>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'stretch',
                        flex: 'auto',
                        flexWrap:{
                      
                          xs: 'wrap',
                          sm: 'nowrap'
                        },
                        
                      }}>
                        <AspectRatio sx={{width: {xs:"100%", sm:200 }, mb:{
                          xs: 2,
                          sm: 0
                        }}}>
                          <div>
                            <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2 }} />
                          </div>
                        </AspectRatio>
                        
    
                        <Grid container sx={{ px: 2 }} direction={"column"}>
                          <Grid item sx={{ flex: "auto" }}>
                            <Typography variant="h8" sx={{fontWeight: "Bold"}} gutterBottom component="div" >
                              {curso.titulo}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {curso.subtitulo}
                            </Typography>
                          
                          
                          </Grid>
                          <Grid item sx={{flex:"auto"}}>
                          <Divider />
                            <Grid container sx={{fontSize: ".8em"}} columnSpacing={2}  >
                              
                              <Grid item   >
                                Instructor: {curso.instructor}
                              </Grid>
                              <Grid item >
                                Fecha de publicación: {new Date(curso.fecha_de_publicacion).toLocaleDateString()}
                              </Grid> 
                              <Grid item
                               >
                                ID: {curso._id}
                              </Grid>
                              
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box sx={{
                        flex: 'unset',
                        textAlignLast: 'end',
                        mb:{
                          xs: -5,
                          sm: 0
  
                        }  }}>
                        <LongMenu curso={curso} />
                      </Box>
                    </Paper>
                  </Grid>
                ))}
                
                
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel key="3" value={value} index={2} sx={{ p: 0 }}>
            <Box
              sx={{
                m: {
                  xs: "8px",
                  md: "-8px",
                },
                mr: {
                  xs: "-8px",
                  md: "-24px",
                },
                mt: {
                  xs: "-24px",
  
                  md: "-24px",
                },
              }}
            >
              <Grid container spacing={2} direction={"column"}>
                <Grid item>
                  <Paper sx={{ p: 2, display: "flex" }}>
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
  
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Nombre de Curso
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Descripción de curso
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper sx={{ p: 2, display: "flex" }}>
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
  
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Nombre de Curso
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Descripción de curso
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper sx={{ p: 2, display: "flex" }}>
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
  
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Nombre de Curso
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Descripción de curso
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </CustomTabPanel>
        </Grid>
      </Box>
    );
  }
  const handleCursos = async () => {
    try {
      // usar get con axios para obtener la lista de servicios
      console.log("Solicitando lista de cursos...");
      const response = await axios.get("http://localhost:3001/api/cursos");
      setCursos(response.data);
    } catch (err) {
      console.log(err);
      alert(`Error al visualizar lista de servicios`);
    }
  };

  useEffect(() => {
    handleCursos();
    // handleFraccIDList();
    // handleServiciosSingle();
  }, []);
  return (
    <Box sx={{}}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={2}>
          <Paper sx={{ m: 2 }}>
            <Grid container alignItems="center">
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
                    md: "center",
                  },

                  p: 2,
                }}
              >
                <Box sx={{ p: 2,
                      width: {
                        
                        md: 120,
                      },
                      height: {
                        
                        md: 120,
                      },
                    }}>
                  <Avatar
                    sx={{
                      width: {
                        xs: 100,
                        md: "100%",
                      },
                      height: {
                        xs: 100,
                        md: "100%",
                      },
                    }}
                    src="/broken-image.jpg"
                  />
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: "grid",
                  flexWrap: "wrap",
                  justifyContent: {
                    xs: "center",
                    sm: "start",
                    md: "center",
                  },
                }}
                xs={12}
                sm={6}
                md={12}
              >
                <Box
                  sx={{
                    display: "grid",
                    alignItems: "space-evenly",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textAlign: { xs: "center", sm: "left", md: "center" },
                    }}
                  >
                    Nombre de Admin
                  </Typography>
                  <Typography
                    variant="body"
                    component="div"
                    sx={{
                      textAlign: { xs: "center", sm: "left", md: "center" },
                    }}
                  >
                    Administrador
                  </Typography>

                  <Link to="#">
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        textAlign: { xs: "center", sm: "left", md: "center" },
                      }}
                    >
                      <DownloadIcon
                        sx={{
                          verticalAlign: "middle",
                          textAlign: "center",
                          alignItems: "space-evenly",
                        }}
                      />
                      Editar info
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={12}
                sx={{
                  display: "grid",
                  flexWrap: "wrap",
                  justifyContent: {
                    xs: "center",
                    sm: "start",
                    md: "center",
                  },
                }}
              >
                <Button variant="contained" color="primary" sx={{ margin: 2 }}>
                  Administrar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          item
          // direction={"column"}
          xs={12}
          sm={12}
          md={10}
          
          sx={{
            
            mt: {
              xs: 0,
              md: 2,
            },
          }}
        >
          <BasicTabs sx={{}} />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Box>
  );
};

export default Dashboard;
