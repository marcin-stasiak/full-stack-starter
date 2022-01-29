import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

import { DefaultEndpointInput } from '../../../utilities/default-endpoint.input';

@InputType()
export class CreateUserInput extends DefaultEndpointInput {
  @IsEmail()
  @Field(() => String)
  public email: string;

  @MinLength(8)
  @MaxLength(64)
  @Field(() => String)
  public password: string;
}
