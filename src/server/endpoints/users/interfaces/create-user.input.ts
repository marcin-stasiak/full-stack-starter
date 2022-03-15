import { Field, InputType } from '@nestjs/graphql';

import { IsDefined, IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

import { DefaultEndpointInput } from '../../../utilities/interfaces/default-endpoint.input';

@InputType()
export class CreateUserInput extends DefaultEndpointInput {
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
