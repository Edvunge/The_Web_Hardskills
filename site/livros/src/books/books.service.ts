import { Injectable } from '@nestjs/common';

export interface Book {  // Adicione 'export' aqui
  id: number;  // Aparentemente o id é um number, não uma string
  title: string;
  author: string;
  year: number;
}

@Injectable()
export class BooksService {
  private books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }
  

  create(book: Omit<Book, 'id'>): Book {
    const newBook = {
      id: Date.now(),
      ...book
    };
    this.books.push(newBook);
    return newBook;
  }
  

  update(id: number, body: Partial<Omit<Book, 'id'>>): Book | null {
    const index = this.books.findIndex(book => book.id === id);
    if (index >= 0) {
      this.books[index] = { ...this.books[index], ...body };
      return this.books[index];
    }
    return null;
  }
  

  remove(id: number): Book | null {
    const index = this.books.findIndex(book => book.id === id);
    if (index >= 0) {
      const book = this.books[index];
      this.books.splice(index, 1);
      return book;
    }
    return null;
  }  
}