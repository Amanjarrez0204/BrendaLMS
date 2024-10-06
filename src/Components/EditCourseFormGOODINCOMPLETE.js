import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import JoditEditor from "jodit-react";
import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";

function SidebarEditarCurso({ onSectionChange }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={() => onSectionChange('informacionBasica')}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Información básica" />
      </ListItemButton>
      <ListItemButton onClick={() => onSectionChange('detalles')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Detalles" />
      </ListItemButton>
      <ListItemButton onClick={() => onSectionChange('contenido')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Contenido" />
      </ListItemButton>
      {/* Agrega más secciones según sea necesario */}
      <ListItemButton onClick={() => onSectionChange('evaluaciones')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluaciones" />
      </ListItemButton>
      {/* ... otras secciones */}
    </List>
  );
}

function InformacionBasica({ cursoId, formValues, setFormValues }) {
  const guardarCurso = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/api/cursos/${cursoId}`, {
        titulo: formValues.titulo,
        subtitulo: formValues.subtitulo,
        descripcion: formValues.descripcion,
        categoria: formValues.categoria,
        subcategoria: formValues.subcategoria,
        lenguaje: formValues.idiomas,
      });
      alert("Curso registrado con éxito");
      console.log(response.data);
    } catch (err) {
      console.error("Error al guardar el curso:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={guardarCurso}
        >
          Guardar curso
        </Button>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Información Básica
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="titulo"
          label="Título del curso"
          name="titulo"
          value={formValues.titulo}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="subtitulo"
          label="Subtítulo del curso"
          name="subtitulo"
          value={formValues.subtitulo}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="descripcion"
          label="Descripción del curso"
          name="descripcion"
          value={formValues.descripcion}
          onChange={handleChange}
        />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="categoria-label">Categoría del curso</InputLabel>
            <Select
              labelId="categoria-label"
              id="categoria"
              name="categoria"
              value={formValues.categoria}
              label="Categoría del curso"
              onChange={handleChange}
            >
              {["Categoria 1", "Categoria 2", "Categoria 3"].map(
                (categoria) => (
                  <MenuItem key={categoria} value={categoria}>
                    {categoria}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="subCategoria-label">Subcategoría</InputLabel>
            <Select
              labelId="subCategoria-label"
              id="sub-categoria"
              name="subcategoria"
              value={formValues.subcategoria}
              label="Subcategoría"
              onChange={handleChange}
            >
              {["Sub Categoria 1", "Sub Categoria 2", "Sub Categoria 3"].map(
                (subCategoria) => (
                  <MenuItem key={subCategoria} value={subCategoria}>
                    {subCategoria}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="lenguaje-label">Lenguaje</InputLabel>
            <Select
              labelId="lenguaje-label"
              id="lenguaje"
              name="idiomas" // Asegúrate de que el name coincide con 'idiomas'
              value={formValues.idiomas}
              label="Lenguaje"
              onChange={handleChange}
            >
              {["Lenguaje 1", "Lenguaje 2", "Lenguaje 3"].map((lenguaje) => (
                <MenuItem key={lenguaje} value={lenguaje}>
                  {lenguaje}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Detalles({ formValues, setFormValues }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
          Detalles
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <JoditEditor
          required
          fullWidth
          id="descripcion"
          label="Descripción del curso"
          name="descripcion"
          placeholder="Descripcion del curso"
          config={{
            readonly: false,
            height: 400,
          }}
          value={formValues.descripcion}
          onChange={(newContent) => {
            setFormValues((prevValues) => ({
              ...prevValues,
              descripcion: newContent,
            }));
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: "flex" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="objetivos"
            label="Escribe un objetivo"
            name="objetivos"
            autoComplete="Escribe un objetivo"
            value={formValues.objetivos}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            sx={{
              ml: 2,
              mt: 1.5,
              mb: 1,
              width: {
                xs: 100,
              },
            }}
            // onClick={() => handleAddObjetivo()} // Implementa esta función si es necesario
          >
            Añadir
          </Button>
        </Box>
      </Grid>
      {/* ... otros campos */}
    </Grid>
  );
}

function Contenido({ formValues, setFormValues }) {
  const [capitulos, setCapitulos] = useState([]); // Como unidades
  const [nombreCapitulo, setNombreCapitulo] = useState("");
  const [nombreLeccion, setNombreLeccion] = useState("");
  const [leccionDescripcion, setLeccionDescripcion] = useState("");
  const [archivoLeccion, setArchivoLeccion] = useState({
    nombreArchivo: "",
    documentoArchivo: "", // Archivo a subir
  }); // Archivos a subir dentro de la leccion
  const [archivosAdjuntos, setArchivosAdjuntos] = useState({
    nombreArchivo: "",
    documentoArchivo: [""], // Archivos a subir
  }); // Archivos adjuntos a la leccion
  const [leccionGratis, setLeccionGratis] = useState(false); // Leccion gratis o no
  const [ajustes, setAjustes] = useState({
    completacionManual: false,
    completacionAlAbrir: false,
    completacionAutomatica: false,
    completacionPorTiempo: "", // Tiempo en segundos
  }); // Ajustes de la leccion

  const handleAddCapitulo = () => {
    console.log("Añadiendo Capitulo");
    console.log(" Nombre Capitulo antes: ", nombreCapitulo);

    setCapitulos([...capitulos, { nombreCapitulo, lecciones: [] }]);
    setNombreCapitulo("");

    console.log(" Nombre Capitulo despues: ", nombreCapitulo);
  };

  const handleAddLeccion = (index) => {
    console.log("Añadiendo Lección");
    console.log(" Nombre Leccion antes: ", nombreLeccion);
    console.log(" Leccion Descripcion antes: ", leccionDescripcion);
    console.log(" Archivo Leccion antes: ", archivoLeccion);
    console.log(" Archivos Adjuntos antes: ", archivosAdjuntos);
    console.log(" Leccion Gratis antes: ", leccionGratis);
    console.log(" Ajustes antes: ", ajustes);
    const newCapitulos = [...capitulos];
    newCapitulos[index].lecciones.push({
      nombreLeccion,
      leccionDescripcion,
      archivoLeccion,
      archivosAdjuntos,
      leccionGratis,
      ajustes,
    });
    setCapitulos(newCapitulos);
    setNombreLeccion("");
    setLeccionDescripcion("");
    setArchivoLeccion({ nombreArchivo: "", documentoArchivo: "" });
    setArchivosAdjuntos({ nombreArchivo: "", documentoArchivo: "" });
    setLeccionGratis(false);
    setAjustes({
      completacionManual: false,
      completacionAlAbrir: false,
      completacionAutomatica: false,
      completacionPorTiempo: "",
    });
    console.log(" Nombre Leccion despues: ", nombreLeccion);
    console.log(" Leccion Descripcion despues: ", leccionDescripcion);
    console.log(" Archivo Leccion despues: ", archivoLeccion);
    console.log(" Archivos Adjuntos despues: ", archivosAdjuntos);
    console.log(" Leccion Gratis despues: ", leccionGratis);
    console.log(" Ajustes despues: ", ajustes);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
          Agregar Contenido
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ my: 2 }}>
        {capitulos.map((capitulo, index) => (
          <Grid
            item
            container
            key={index}
            xs={12}
            sx={{
              bgcolor: "lightgray",
              mb: 2,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                bgcolor: "primary.main",
                p: 2,
                color: "primary.contrastText",
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Typography variant="subtitle1">
                Capítulo: {capitulo.nombreCapitulo}
              </Typography>
            </Grid>
            <Grid
              className="leccionItem"
              item
              xs={12}
              sx={{ bgcolor: "#eeeeee" }}
            >
              <List component="div" disablePadding>
                {capitulo.lecciones.map((leccion, leccionIndex) => (
                  <ListItemButton key={leccionIndex}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Lección: " + leccion.nombreLeccion} />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
            <Grid className="leccionAddButtons" item xs={12}>
              <ListItemButton key={index}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        // endIcon={<AddIcon />}
                        onClick={() => handleAddLeccion(index)}
                        sx={{ width: "100%", height: 50, p: 2 }}
                      >
                        Añadir Lección
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        // endIcon={<ExpandLessIcon />}
                        onClick={() => handleAddLeccion(index)}
                        sx={{ width: "100%", height: 50, p: 2 }}
                      >
                        Agregar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItemButton>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sx={{}}>
        <Grid container item spacing={2}>
          <Grid item xs={9}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nombreCapitulo"
              label="Nombre del Capítulo"
              name="nombreCapitulo"
              value={nombreCapitulo}
              onChange={(e) => setNombreCapitulo(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAddCapitulo}
            >
              Añadir Capítulo
            </Button>
          </Grid>
        </Grid>
      </Grid>
      
      {/* ... otros campos si es necesario */}
    </Grid>
  );
}

function Evaluaciones({ formValues, setFormValues }) {
  // Implementa Evaluaciones similar a InformacionBasica
  return (
    <div>
      <Typography variant="h6">Evaluaciones</Typography>
      {/* ... campos de Evaluaciones */}
    </div>
  );
}

const EditCourseForm = ({ cursoId, cursoName }) => {
  const [formValues, setFormValues] = useState({
    titulo: "",
    subtitulo: "",
    descripcion: "",
    requisitos: "",
    categoria: "",
    subcategoria: "",
    idiomas: "",
    contenido: "",
    creditos: "",
    horario: "",
    examenes: "",
    tests: "",
    instructor: "",
    fechaDePublicacion: Date.now(),
    alumnos: "",
    objetivos: "",
    nivelDeInstruccion: "",
  });

  const [currentSection, setCurrentSection] = useState('informacionBasica'); // Estado para la sección actual

  const navigate = useNavigate();

  useEffect(() => {
    if (cursoId) {
      obtenerValues(cursoId);
    }
  }, [cursoId]);

  const obtenerValues = async (cursoId) => {
    try {

      
      console.log("Obteniendo curso...");
      const response = await axios.get(`http://localhost:3001/api/cursos/${cursoId}`);

      console.log("Response Data:", response.data);
      // alert("Response Data >: " + response.data._id);
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        ...response.data,
      }));
    } catch (err) {
      console.error("Error al obtener el curso:", err);
    }
  };

  const guardarCurso = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/api/cursos/${cursoId}`, {
        titulo: formValues.titulo,
        subtitulo: formValues.subtitulo,
        descripcion: formValues.descripcion,
        categoria: formValues.categoria,
        subcategoria: formValues.subcategoria,
        lenguaje: formValues.idiomas, // Asegúrate de que el campo 'lenguaje' coincide con 'idiomas'
      });
      alert("Curso registrado con éxito");
      console.log(response.data);
    } catch (err) {
      console.error("Error al guardar el curso:", err);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      console.log("Intentando registrar nuevo curso...");
      const response = await axios.post("http://localhost:3001/api/cursos/", {
        titulo: formValues.titulo,
        subtitulo: formValues.subtitulo,
        descripcion: formValues.descripcion,
        categoria: formValues.categoria,
        subcategoria: formValues.subcategoria,
        idiomas: formValues.idiomas,
        // Agrega otros campos según sea necesario
      });
      alert("Curso registrado con éxito");
      console.log(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error al registrar el curso:", err);
    }
  };

  // Función para renderizar la sección actual
  const renderSection = () => {
    switch (currentSection) {
      case 'informacionBasica':
        return <InformacionBasica formValues={formValues} setFormValues={setFormValues} cursoId={cursoId} />;
      case 'detalles':
        return <Detalles formValues={formValues} setFormValues={setFormValues} />;
      case 'contenido':
        return <Contenido formValues={formValues} setFormValues={setFormValues} />;
      case 'evaluaciones':
        return <Evaluaciones formValues={formValues} setFormValues={setFormValues} />;
      // Agrega más casos según sea necesario
      default:
        return <InformacionBasica formValues={formValues} setFormValues={setFormValues} cursoId={cursoId} />;
    }
  };

  return (
    <Box component="form">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <Paper>
            <SidebarEditarCurso onSectionChange={setCurrentSection} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={9}>
          <Typography variant="h6" sx={{ fontWeight: "Bold", mb: 2 }}>
            Editando curso: {cursoName} ID: {cursoId}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={guardarCurso}
          >
            Guardar curso
          </Button>
          {renderSection()}
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleRegister}
      >
        Crear nuevo curso
      </Button>
    </Box>
  );
};

export default EditCourseForm;
