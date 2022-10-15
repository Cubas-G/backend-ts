import { ulid } from 'ulid';
import bcryp from 'bcrypt';
import { Product } from './models';
import { Product as IProduct } from './interfaces';

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

const list = async () => {
    return products;
}

const store = async (data: IProduct) => {
    const id = ulid();
    // products.push(data);
    // return data;
    const password = await bcryp.hash("123", 10);
    const passwordIsValid = await bcryp.compare("1234", password);
    console.log(password);
    console.log('paswor is valid', passwordIsValid);


    const product = new Product({ name: data.name, price: data.price, id, password });

    await product.save();

    return product;
}

const getOne = async () => {

}

const destroy = async () => {

}


export default {
    list,
    store,
    getOne,
    delete: destroy
}