import { ulid } from 'ulid';
import mongoose from 'mongoose';

export let products = [
    {
        id: ulid(),
        name: "computadora",
        price: 1000
    },
    {
        id: ulid(),
        name: "teclado rbg",
        price: 100
    }
];

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('Conected to mongodb');
    } catch (error) {
        console.log('error de base de datos');
    }
}