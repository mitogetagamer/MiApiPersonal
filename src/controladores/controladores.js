import modelos from "../modelos/modelos.js"
const controlador = {
    crearUsuario: async (solicitud, respuesta) => {
        try{
        
        const nuevoEstudiante = new modelos(solicitud.body);
        console.log(nuevoEstudiante);
        const EstudianteCreado= await nuevoEstudiante.save();
        console.log(EstudianteCreado);
        console.log("solicitud body", solicitud.body);
        if(EstudianteCreado._id){
          respuesta.json({
            resultado: "Bien",
            mensaje:"usuario creado exitosamente",
            id: EstudianteCreado._id
          });

        }
        
        }
       catch(error) {respuesta.json({error: true,mensaje: "ocurrio un error "})
        
         
        }
},
    leerUsuario: async (solicitud, respuesta) => { 
        try{
        const EstudianteEscontrado = await modelos.findById(solicitud.params.id)
        if (EstudianteEscontrado._id) {
            respuesta.json({
                resultado: "bien",
                mensaje: "El dato fue leido correctamente",
                datos: EstudianteEscontrado
              })
        }
       
        }
       catch(error) {respuesta.json({error: true,mensaje: "ocurrio un error "})
        
         
        }},
    leerUsuarios:async (solicitud, respuesta) => {
        try {
            const EstudiantesEncontrados = await modelos.find()
             if (EstudiantesEncontrados) {
               respuesta.json({
                 resultado: "bien",
                 mensaje: "Estudiantes leidos correctamente",
                 datos: EstudiantesEncontrados
               })
             }
             
           } catch (error) {
             respuesta.json({
               resultado: "Mal",
               mensaje: "Los datos  no pudieron ser leidos correctamente",
               datos: "Error"
             })
           }
    },
    actualizarUsuario:async (solicitud, respuesta) => {
        try {
        const Actualizar = await modelos.findByIdAndUpdate(solicitud.params.  id, solicitud.body)
        if (Actualizar._id) {
          respuesta.json({
            resultado: "bien",
            mensaje: "El dato fue  actualizado correctamente",
            datos: Actualizar._id
          })
          
        }
       
      } catch (error) {
        respuesta.json({
          resultado: "Mal",
          mensaje: "El dato fue no pudo ser actualizado correctamente",
          datos: "error"
        });
    }
    },
    
     
    eliminarUsuario: async(solicitud, respuesta) => {try {
        const Eliminar = await modelos.findByIdAndDelete(solicitud.params.id)
        if (Eliminar._id) {
          respuesta.json({
            resultado: "bien",
            mensaje: "El dato fue  eliminado correctamente",
            datos: null
          })
          
        }
       
      } catch (error) {
        respuesta.json({
          resultado: "Mal",
          mensaje: "El dato fue no pudo ser leido correctamente",
          datos: "error"
        });
      }}
        
}

export default controlador