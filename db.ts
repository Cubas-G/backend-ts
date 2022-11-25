import { ulid } from 'ulid';
import mongoose from 'mongoose';
import config from './config';

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
        await mongoose.connect(`mongodb+srv://${config.db.username}:${config.db.password}@${config.db.host}/test?retryWrites=true&w=majority`);
        console.log('Conected to mongodb');
    } catch (error) {
        console.log('error de base de datos', error);
    }
}