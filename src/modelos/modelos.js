import { Schema,model } from "mongoose";

const esquema = new Schema(
    {
        nombre: {type: String,required:true},
        grado: {type: Number,required:true},
        vota: {type: Boolean,required:true},
        inasistencia: {type: Date,required:false},
        delegacion: {type: String,required:true},
        //codigo: {type: Number,required:true}
    }
 
)
//En este caso la parte entre comillas tambien va a representar el nombre que se le va a asignar despues del "/" 
export default model("estudiante",esquema);