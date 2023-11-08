import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field((type) => Int)
  userId: number;
}
