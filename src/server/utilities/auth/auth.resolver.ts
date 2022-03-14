import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../../endpoints/users/interfaces/create-user.input';
import { User } from '../../endpoints/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponse } from './interfaces/login.response';;
import { AuthGuard } from './guards/auth.guard';
import { RegisterInput } from "./interfaces/register.input";
import { LoginInput } from "./interfaces/login.input";

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