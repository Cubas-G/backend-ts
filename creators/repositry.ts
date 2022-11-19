import { ulid } from 'ulid';
import { Creator } from './models';
import { Creator as ICreator } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Creator.find({ trending, popular });
}

const store = async (data: ICreator) => {
    const id = ulid();

    const model = new Creator({ ...data, id });

    await model.save();

    return model;
}

const getOne = async (id: string) => {
    return await Creator.findOne({ id });
}

export default {
    list,
    store,
    getOne
}