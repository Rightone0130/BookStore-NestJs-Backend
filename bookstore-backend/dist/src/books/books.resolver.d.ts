import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
export declare class BooksResolver {
    private readonly booksService;
    constructor(booksService: BooksService);
    createBook(createBookInput: CreateBookInput): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    updateBook(updateBookInput: UpdateBookInput): Promise<{
        id: number;
        name: string;
        description: string;
        userId: number;
        user?: import("../users/entities/user.entity").User;
    } & Book>;
    removeBook(id: number): Promise<Book>;
}
