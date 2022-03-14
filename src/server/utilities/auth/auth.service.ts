import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../../endpoints/users/users.service';
import { LoginInput } from './interfaces/login.input';
import { RegisterInput } from "./interfaces/register.input";

import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  public async validateUser(email: string, password: string): Promise<any> {
    const user = this.usersService.findOneByEmail(email);

    // user.password
  }

  public async login(loginInput: LoginInput) {
    const user = await this.usersService.findOneByEmail(loginInput.email);
    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user.id,
        role: user.role,
      }),
      user: result,
    };
  }

  public async register(registerInput: RegisterInput) {
    const user = await this.usersService.findOneByEmail(registerInput.email);

    if (user) {
      throw new Error('User already exists');
    }

    const password = await bcrypt.hash(registerInput.password, 12);

    // TODO: Add correct variables
    return this.usersService.create({
      slug: registerInput.email,
      title: registerInput.email,
      description: registerInput.email,
      ...registerInput,
      password,
    })
  }
}
