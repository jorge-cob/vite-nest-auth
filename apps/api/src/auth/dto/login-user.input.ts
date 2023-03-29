import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
