import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/books/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {

  @PrimaryGeneratedColumn()
  @Field()
  id: number;


  @Column()
  @Field()
  username: string;

  @OneToMany(() => Book, book => book.user)
  books?: Book[];



  @Column()
  @Field()
  sub: string;


  @Column()
  @Field()
  role: string;

}
