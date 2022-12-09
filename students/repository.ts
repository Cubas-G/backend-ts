import { ulid } from 'ulid';
import { Student } from './models';
import { Student as IStudent } from './interfaces';


const list = async () => {
    return await Student.find();
}

const store = async (data: IStudent) => {
    const id = ulid();
    const product = new Student({id, foto: data.foto,name: data.name, apellido: data.apellido,telefono: data.telefono,descripcion: data.descripcion });

    await product.save();

    return product;
}

const getOne = async (id: string) => {
    return await Student.findOne({ id });
}

const destroy = async () => {
    return {};
}


export default {
    list,
    store,
    getOne,
    delete: destroy
}