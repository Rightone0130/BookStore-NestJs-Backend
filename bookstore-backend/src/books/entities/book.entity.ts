import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Book {
 
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;


  @Column()
  @Field(type => String)
  name: string;

  @Column()
  @Field(type => String)
  description: string;

  @Column()
  @Field(type => Int)
  userId: number


  @ManyToOne(() => User, user => user.books)
  @Field(type => User)
  user?: User;

}
