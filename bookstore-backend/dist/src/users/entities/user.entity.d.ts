import { Book } from 'src/books/entities/book.entity';
export declare class User {
    id: number;
    username: string;
    books?: Book[];
    password: string;
    role: string;
}
