import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { IsEnum, IsUUID } from 'class-validator';

import { CreateUserInput } from './create-user.input';
import { UserRole } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsUUID()
  @Field(() => String)
  id: string;

  @IsEnum(UserRole)
  @Field(() => String)
  role?: UserRole;
}
