import {Router} from "express";
import controladores from"../controladores/controladores.js"

const rutaEstudiantes = Router();

rutaEstudiantes.post("/",controladores.crearUsuario);
rutaEstudiantes.get("/:id",controladores.leerUsuario);
rutaEstudiantes.get("/",controladores.leerUsuarios);
rutaEstudiantes.put('/:id', controladores.actualizarUsuario);
rutaEstudiantes.delete('/:id',controladores.eliminarUsuario);

export default rutaEstudiantes;