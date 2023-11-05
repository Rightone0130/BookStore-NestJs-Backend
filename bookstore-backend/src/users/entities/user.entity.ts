import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/books/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;


  @Column()
  @Field(type => String)
  username: string;

  @OneToMany(() => Book, book => book.user)
  books?: Book[];


  @Column()
  @Field(type => String)
  password: string;



}
