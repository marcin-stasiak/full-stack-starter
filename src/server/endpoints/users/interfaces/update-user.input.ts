import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { IsDefined, IsEnum, IsUUID } from 'class-validator';

import { UserRole } from '../entities/user.entity';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsDefined()
  @IsUUID()
  @Field(() => String)
  id: string;

  @IsDefined()
  @IsEnum(UserRole)
  @Field(() => String)
  role?: UserRole;
}
