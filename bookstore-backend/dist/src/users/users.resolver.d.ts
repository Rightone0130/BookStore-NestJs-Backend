import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<{
        updateUserInput: UpdateUserInput;
        id: number;
        username: string;
        books?: import("../books/entities/book.entity").Book[];
        password: string;
    } & User>;
    removeUser(id: number): string;
}
