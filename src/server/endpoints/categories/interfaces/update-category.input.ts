import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateCategoryInput } from './create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @IsUUID()
  @Field(() => String)
  id: string;
}
