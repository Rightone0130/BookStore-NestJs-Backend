import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field((type) => String)
  username: string;

  @Field((type) => String)
  password: string;
}
