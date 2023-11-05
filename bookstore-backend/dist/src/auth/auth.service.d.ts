import { LoginUserInput } from './dto/login-user.input';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(userName: string, password: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
        user: User;
    }>;
    signup(loginUserInput: LoginUserInput): Promise<void>;
}
