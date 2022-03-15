import { Field, InputType } from '@nestjs/graphql';

import { IsDefined, IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class RegisterInput {
  @IsDefined()
  @MinLength(3)
  @MaxLength(32)
  @Matches(/^[a-zA-Z0-9]$/)
  @Field(() => String)
  public username: string;

  @IsDefined()
  @IsEmail()
  @MinLength(8)
  @MaxLength(254)
  @Field(() => String)
  public email: string;

  @IsDefined()
  @MinLength(8)
  @MaxLength(64)
  @Field(() => String)
  public password: string;
}
