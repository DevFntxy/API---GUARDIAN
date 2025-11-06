import { Modelm, Schema , Types } from "mongoose";

const reportSchema = new Schema({

    id_report: { 
        required: true,
        unique: true,
        type: String 
    },

    title: { 
        type: String, required: true
     },
    description: { 
        type: String, required: true 
    },
    dateReported: { 
        type: Date, default: Date.now 
    },
    dateUpdate:{
        type: Date, default: Date.now
    },
    
    status: { 
        type: String, 
        enum: ['Enviado', 'Revicion', 'Completado'],
    }
})