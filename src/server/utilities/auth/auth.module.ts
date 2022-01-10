import { Module } from '@nestjs/common';

import { UsersModule } from '../../endpoints/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [UsersModule],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
