import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsUUID()
  @Field(() => String)
  id: string;
}
