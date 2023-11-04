import { User } from 'src/users/entities/user.entity';
export declare class Book {
    id: number;
    name: string;
    description: string;
    userId: number;
    user?: User;
}
