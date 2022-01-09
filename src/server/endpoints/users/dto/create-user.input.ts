import { Field, InputType } from '@nestjs/graphql';

import { IsEmail } from 'class-validator';

import { DefaultEndpointInput } from '../../../utilities/default-endpoint.input';

@InputType()
export class CreateUserInput extends DefaultEndpointInput {
  @IsEmail()
  @Field(() => String)
  public email: string;
}
