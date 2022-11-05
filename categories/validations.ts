import { Category } from "./interfaces";
import { CategoriesException } from './exceptions';


const validateCategoryInput = (data: Category) => {
    if (!data.name) throw new CategoriesException("Property name is missing");
    if (data.name.length < 3) throw new CategoriesException("Property name must be at least 3 characters");
    if (data.name.length > 20) throw new CategoriesException("Property name must be at most 20 characters");
    if (!data.description) throw new CategoriesException("Property description is missing");
}

export default {
    validateCategoryInput
}