import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @IsEmail()
  @Field(() => String)
  public email: string;

  @MinLength(8)
  @MaxLength(64)
  @Field(() => String)
  public password: string;
}
