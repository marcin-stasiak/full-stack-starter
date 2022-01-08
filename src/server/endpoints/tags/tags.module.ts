import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tag } from './entities/tag.entity';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  exports: [TagsService],
  providers: [TagsResolver, TagsService],
})
export class TagsModule {}
