import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  exports: [UsersService],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
