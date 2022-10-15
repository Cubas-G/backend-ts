import { ulid } from 'ulid';

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

const store = async (data: any) => {
    data.id = ulid();
    products.push(data);
    return data;
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