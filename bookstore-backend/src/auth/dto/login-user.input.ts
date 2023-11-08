import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field((type) => String)
  username: string;

  @Field((type) => String)
  password: string;
}
