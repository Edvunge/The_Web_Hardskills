import { BooksService, Book } from './books.service';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    findAll(): Book[];
    findOne(id: string): Book;
    create(body: {
        title: string;
        author: string;
        year: number;
    }): Book;
    update(id: string, body: Partial<{
        title: string;
        author: string;
        year: number;
    }>): Book;
    remove(id: string): Book;
}
