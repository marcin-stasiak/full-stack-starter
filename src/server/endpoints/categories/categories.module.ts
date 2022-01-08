import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './entities/category.entity';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [CategoriesService],
  providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
