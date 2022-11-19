import { Creator } from './interfaces';
import repository from './repositry';
import validations from './validations';

const list = async (query: any) => {
    const list = await repository.list(query);

    const data = {
        data: list,
        metadata: {
            nextPage: 2,
            currentPage: 1,
            perPage: 20
        }
    };

    return data;
}


const store = async (data: Creator) => {
    validations.validateCreatorInput(data);

    const model = await repository.store(data);
    return model;
}

const getOne = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");

    return model;
}

export default {
    list,
    store,
    getOne,
}