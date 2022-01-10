import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserInput } from '../../endpoints/users/dto/create-user.input';
import { User } from '../../endpoints/users/entities/user.entity';
import { UsersService } from '../../endpoints/users/users.service';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  public async login(loginInput: LoginInput): Promise<any> {
    const found = this.usersService.findOneByEmail(loginInput.email);

    if (found) {
    }
  }

  public async register(createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  public async validateUser(username: string, pass: string): Promise<any> {}

  private async createToken(user: User): Promise<any> {
    const accessToken = this.jwtService.sign(user);
    console.log(accessToken);
  }
}
