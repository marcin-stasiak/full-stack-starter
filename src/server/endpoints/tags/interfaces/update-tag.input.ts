import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateTagInput } from './create-tag.input';

@InputType()
export class UpdateTagInput extends PartialType(CreateTagInput) {
  @IsUUID()
  @Field(() => String)
  id: string;
}
