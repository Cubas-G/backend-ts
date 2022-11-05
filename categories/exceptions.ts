export class CategoriesException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CategoriesException';
    }
}