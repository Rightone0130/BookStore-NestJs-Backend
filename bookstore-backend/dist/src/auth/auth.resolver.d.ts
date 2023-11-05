import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { User } from 'src/users/entities/user.entity';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(loginUserInput: LoginUserInput, context: any): Promise<{
        access_token: string;
        user: User;
    }>;
    signup(loginUserInput: LoginUserInput, context: any): Promise<void>;
}
