
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
// import { Auth0Strategy } from './auth0.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    PassportModule, 
    UsersModule, 
    JwtModule.register({
    signOptions: {expiresIn: '60s'},
    secret: 'hide-me'
  })],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
