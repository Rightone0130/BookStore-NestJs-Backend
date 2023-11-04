import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserInput: UpdateUserInput): Promise<{
        updateUserInput: UpdateUserInput;
        id: number;
        username: string;
        books?: import("../books/entities/book.entity").Book[];
        sub: string;
        role: string;
    } & User>;
    remove(id: number): string;
}
