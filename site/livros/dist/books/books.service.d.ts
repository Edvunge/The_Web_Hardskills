export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
}
export declare class BooksService {
    private books;
    findAll(): Book[];
    findOne(id: number): Book | undefined;
    create(book: Omit<Book, 'id'>): Book;
    update(id: number, body: Partial<Omit<Book, 'id'>>): Book | null;
    remove(id: number): Book | null;
}
