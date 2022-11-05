import { ulid } from 'ulid';
import { Category } from './models';
import { Category as ICategory } from './interfaces';

const list = async () => {
    return await Category.find();
}

const store = async (data: ICategory) => {
    const id = ulid();

    const model = new Category({ id, name: data.name, description: data.description, slug: data.slug });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Category.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Category.deleteOne({ id });
}


const update = async (id: string, data: ICategory) => {

    const model = await Category.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}