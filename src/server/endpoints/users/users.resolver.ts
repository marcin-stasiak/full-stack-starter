import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { JwtGuard } from '../../utilities/guards/jwt.guard';
import { User } from './entities/user.entity';
import { CreateUserInput } from './interfaces/create-user.input';
import { UpdateUserInput } from './interfaces/update-user.input';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @Mutation(() => User)
  public createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User])
  public getUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  public getUser(@Args('slug', { type: () => String }) slug: string) {
    return this.usersService.findOneBySlug(slug);
  }

  @Mutation(() => User)
  public updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User)
  public removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
