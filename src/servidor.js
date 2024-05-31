import express from"express";
import rutas from "./rutas/rutas.js";
import morgan from "morgan";

const servidor = express()
servidor.use(morgan("dev"))
servidor.use(express.json())
// el Estudiantes entre comillas va a ser el nombre de la ruta que se le asigne dentro del servidor
servidor.use("/estudiantes",rutas)

servidor.get("/",(solicitud,respuesta)=>{
    respuesta.status(404).send("no encontrado, porfavor especifique una ruta")
})

export default servidor