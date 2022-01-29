import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserInput } from '../../endpoints/users/interfaces/create-user.input';
import { User } from '../../endpoints/users/entities/user.entity';
import { UsersService } from '../../endpoints/users/users.service';
import { LoginInput } from './interfaces/login.input';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  public async validate(payload: any): Promise<any> {
    const user = this.usersService.findOneByEmail(payload.email);

    // user.password
  }
}
