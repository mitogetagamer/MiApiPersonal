import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("coronamooos");
}).catch((error)=>{console.log("se complica");})
