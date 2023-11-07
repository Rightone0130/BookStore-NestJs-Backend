import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { AuthModule } from './auth/auth.module';
import { AppResolver } from './app/app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schma.gql'),
      sortSchema: true,
      csrfPrevention:false,
      introspection: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    BooksModule,
    AuthModule
  ],
  providers: [AppResolver],
})
export class AppModule {}
