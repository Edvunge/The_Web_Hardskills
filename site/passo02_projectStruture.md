Vamos criar uma API de **livros** (`books`) — com operações de **CRUD** (Create, Read, Update, Delete). Isso é ótimo para entender a estrutura do NestJS.

---

## 🧱 Etapa 2 (atualizada): Criando API REST para Livros

---

### 📦 Gerar os arquivos necessários:

No terminal, dentro do projeto, roda:

```bash
nest g module books
nest g controller books
nest g service books
```

Isso vai criar:

```
src/
└── books/
    ├── books.controller.ts
    ├── books.service.ts
    ├── books.module.ts
```

---

### ✍️ Vamos agora codar:

---

### 🔧 `books.service.ts` — lógica de negócio

```ts
import { Injectable } from '@nestjs/common';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Injectable()
export class BooksService {
  private books: Book[] = [];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id === id);
  }

  create(book: Omit<Book, 'id'>) {
    const newBook: Book = {
      id: Date.now(),
      ...book,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, updatedBook: Partial<Omit<Book, 'id'>>) {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) return null;
    this.books[index] = { ...this.books[index], ...updatedBook };
    return this.books[index];
  }

  delete(id: number) {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) return null;
    return this.books.splice(index, 1)[0];
  }
}
```

---

### 🌐 `books.controller.ts` — rotas HTTP

```ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: { title: string; author: string; year: number }) {
    return this.booksService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<{ title: string; author: string; year: number }>) {
    return this.booksService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.delete(Number(id));
  }
}
```

---

### 🧪 Testar a API (manualmente com Postman ou Insomnia):

- **GET** `http://localhost:3000/books` → lista todos os livros
- **POST** `http://localhost:3000/books` com JSON:
```json
{
  "title": "Dom Casmurro",
  "author": "Machado de Assis",
  "year": 1899
}
```
- **GET** `http://localhost:3000/books/123`
- **PUT** `http://localhost:3000/books/123` (com dados atualizados)
- **DELETE** `http://localhost:3000/books/123`

---

### ✅ Conclusão da Etapa 2:
- Criamos o módulo, controller e service para uma **API de livros**
- Implementamos todas as rotas REST básicas
- Código está simples e limpo, perfeito para iniciantes

---

