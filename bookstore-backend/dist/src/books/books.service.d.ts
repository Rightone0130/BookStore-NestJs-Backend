import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { Book } from './entities/book.entity';
export declare class BooksService {
    private booksRepository;
    private ownersService;
    constructor(booksRepository: Repository<Book>, ownersService: UsersService);
    create(createBookInput: CreateBookInput): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    update(id: number, updateBookInput: UpdateBookInput): Promise<{
        id: number;
        name: string;
        description: string;
        userId: number;
        user?: import("../users/entities/user.entity").User;
    } & Book>;
    remove(id: number): Promise<Book>;
}
