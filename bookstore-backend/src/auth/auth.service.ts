import { Injectable } from '@nestjs/common';
import { LoginUserInput } from './dto/login-user.input';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService:JwtService, ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findByUserName(username, password);

        // const valid = await bcrypt.compare(password, user?.password);

        if (user) {  
            return user;
        }
    
        return null;
    }
    

    // async login(loginUserInput: LoginUserInput) {
    //     const user = await this.usersService.findByUserName(loginUserInput.username, loginUserInput.password);
    //     return {
    //         access_token: this.jwtService.sign({ sub:user.id , username: user.username}), 
    //         user
    //     };
    // }


    async login(user: User) {

        return {
            access_token: this.jwtService.sign({ sub:user.id , username: user.username}), 
            user
        };
    }

    async signup(loginUserInput: LoginUserInput){
        const user = await this.usersService.findByUserName(loginUserInput.username, loginUserInput.password);

        if (user){
            throw new Error('User already exists!')
        }

        // const password = await bcrypt.hash(loginUserInput.password, 10);

        return this.usersService.create({
            ...loginUserInput
        })

    }
    
}
