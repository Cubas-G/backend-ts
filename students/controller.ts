import repository from './repository';

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {
    if (!data.name) throw new Error("Property name is missing")
    const student = await repository.store(data);
    return student;
}

const getOne = async (id: string) => {
    const student = await repository.getOne(id);
    if (!student) throw new Error("Product not found");

    return student;
}
const deleteItem = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");

    return await repository.delete(id);
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
}