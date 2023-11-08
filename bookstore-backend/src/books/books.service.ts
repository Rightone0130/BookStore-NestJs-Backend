import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
    private ownersService: UsersService,
  ) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const newBook = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return this.booksRepository.findOneOrFail({
      where: { id },
    });
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    const books = await this.booksRepository.findOne({ where: { id } });

    return this.booksRepository.save({ ...books, ...updateBookInput });
  }

  async remove(id: number) {
    const book = await this.booksRepository.findOne({ where: { id } });

    return this.booksRepository.remove(book);
  }
}
