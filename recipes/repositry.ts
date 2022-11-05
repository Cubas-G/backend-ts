import { ulid } from 'ulid';
import { Recipe } from './models';
import { Recipe as IRecipe } from './interfaces';

const list = async () => {
    return await Recipe.find();
}

const store = async (data: IRecipe) => {
    const id = ulid();

    const model = new Recipe({ id, title: data.title, image: data.image, ingredients: data.ingredients });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Recipe.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Recipe.deleteOne({ id });
}


const update = async (id: string, data: IRecipe) => {

    const model = await Recipe.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}