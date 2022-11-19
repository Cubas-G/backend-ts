import { Recipe } from "./interfaces";
import { CategoriesException } from './exceptions';


const validateRecipeInput = (data: Recipe) => {
    if (!data.title) throw new CategoriesException("Property title is missing");
    if (data.title.length < 3) throw new CategoriesException("Property title must be at least 3 characters");
    if (data.title.length > 30) throw new CategoriesException("Property title must be at most 20 characters");
    if (!data.image) throw new CategoriesException("Property image is missing");
}

export default {
    validateRecipeInput
}