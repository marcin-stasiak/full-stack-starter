import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../../endpoints/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('app.secret'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
    UsersModule,
  ],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
