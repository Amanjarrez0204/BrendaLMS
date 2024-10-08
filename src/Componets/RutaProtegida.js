import React from "react";
import { Navigate } from "react-router-dom";

 const RutaProtegida =({ element: Element, ...rest })  => {
    const estalogeado = !!localStorage.getItem('token');
    return estalogeado ? <Element {...rest} /> : <Navigate to="/login" />;
 };
 export default RutaProtegida;