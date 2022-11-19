import { Creator } from "./interfaces";
import { CategoriesException } from './exceptions';


const validateCreatorInput = (data: Creator) => {
    if (!data.name) throw new CategoriesException("Property title is missing");
    if (data.name.length < 3) throw new CategoriesException("Property title must be at least 3 characters");
    if (data.name.length > 30) throw new CategoriesException("Property title must be at most 20 characters");
    if (!data.avatar) throw new CategoriesException("Property image is missing");
}

export default {
    validateCreatorInput
}