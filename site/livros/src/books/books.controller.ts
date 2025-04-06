import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { BooksService, Book } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Book {
    const book = this.booksService.findOne(parseInt(id, 10));
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  @Post()
  create(@Body() body: { title: string; author: string; year: number }): Book {
    return this.booksService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<{ title: string; author: string; year: number }>): Book {
    const updated = this.booksService.update(parseInt(id, 10), body);
    if (!updated) {
      throw new NotFoundException('Book not found for update');
    }
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Book {
    const deleted = this.booksService.remove(parseInt(id, 10));
    if (!deleted) {
      throw new NotFoundException('Book not found for deletion');
    }
    return deleted;
  }
}
