import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '../../endpoints/users/entities/user.entity';
import { CreateUserInput } from '../../endpoints/users/interfaces/create-user.input';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginInput } from './interfaces/login.input';
import { LoginResponse } from './interfaces/login.response';
import { RegisterInput } from './interfaces/register.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(AuthGuard)
  public login(@Args('loginUserInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => User)
  public register(@Args('signupUserInput') registerInput: RegisterInput) {
    return this.authService.register(registerInput);
  }
}
