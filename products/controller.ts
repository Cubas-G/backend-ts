import { products } from '../db'
import repository from './repository';

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {
    if (!data.name) throw new Error("Property name is missing")
    const product = await repository.store(data);
    return product;
}

const getOne = async (id: String) => {
    return products.find(item => item.id === id);
}


export default {
    list,
    store,
    getOne
}