import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: String,
    foto: String,
    name: String,
    apellido: String,
    telefono: Number,
    descripcion: String,
});

export const Student = mongoose.model('Student', studentSchema);
