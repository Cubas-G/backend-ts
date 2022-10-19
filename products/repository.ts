import { ulid } from 'ulid';
import { Product } from './models';
import { Product as IProduct } from './interfaces';


const list = async () => {
    return [];
}

const store = async (data: IProduct) => {
    const id = ulid();

    const product = new Product({ name: data.name, price: data.price, id });

    await product.save();

    return product;
}

const getOne = async () => {
    return {};
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